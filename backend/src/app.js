import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send("hello world");
});



api.get('/authentication', async (req, res) => {
    if (req.cookies.token) {
        try {
            const verificationStatus = jwt.verify(req.cookies.token, JWTkey);
            if (verificationStatus) {
                const userAuthTe = await userCollection.findOne({ _id: verificationStatus._id })
                if (userAuthTe) {
                    console.log(verificationStatus);
                    res.status(200).json({ verificationStatus: verificationStatus, userInfo: userAuthTe });
                } else {
                    res.status(403);
                }

            }
        } catch (error) {
            return res.status(403).json({ message: "Authentication failed" });
        }
    } else {
        return res.status(403).json({ message: "Login or Register First" });
    }
});



api.post("/register/:userEmail/:userPassword/:userName", async (req, res) => {
    const userEmail = req.params.userEmail;
    const userPassword = req.params.userPassword;
    const userName = req.params.userName;
    
    bcrypt.hash(userPassword, saltRound, async (err, hash) => {
        if (err) {
            console.error(err);
        } else {
            const userToAdd = userCollection({
                userName: userName,
                userEmail: userEmail,
                userPassword: hash,
                cart: [],
            });
            const userCheck = await userCollection.findOne({ userEmail: userEmail })
            if (userCheck) {
                res.status(400).json({ message: 'User already exists' });
            } else {
                try {
                    await userToAdd.save();

                    const userPayload = {
                        _id: userToAdd._id,
                        userName: userToAdd.userName,
                        userEmail: userToAdd.userEmail,
                    }

                    const tokenJwtSigned = jwt.sign(userPayload, JWTkey);

                    res.cookie('LoggedIn', tokenJwtSigned, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 });
                    res.status(200).json({ message: tokenJwtSigned });
                } catch (error) {
                    console.error(error);
                    res.status(400).json({ message: 'User already exists' });
                }
            }

        }
    });
});


api.post("/login/:userEmail/:userPassword", async (req, res) => {
    const userEmail = req.params.userEmail;
    const userPassword = req.params.userPassword;

    const userFind = await userCollection.findOne({ userEmail: userEmail });
    if (userFind) {
        bcrypt.compare(userPassword, userFind.userPassword, async (err, result) => {

            if (result === true) {
                const userPayload = {
                    _id: userFind._id,
                    userName: userFind.userName,
                    userEmail: userFind.userEmail,
                }
                const tokenJwtSigned = jwt.sign(userPayload, JWTkey);

                res.set('set-cookie', `loggedIn=${tokenJwtSigned}; HttpOnly`);
                res.status(200).json({ message: tokenJwtSigned });
            } else {
                console.log("Incorrect Password");

            }
        });


    } else {
        console.log("User Not Found");
        res.redirect("/login");
    }
});

api.get("/cartAdd/:itemID/:userEmail", async (req, res) => {
    try {
        const userEmail = req.params.userEmail;
        const itemID = req.params.itemID;
        const userFind = await userCollection.findOne({ userEmail: userEmail });
        
        if (!userFind) {
            return res.status(404).json({ error: 'User not found' });
        }

        const listCart = userFind.cart;

        // Check if the item with the given itemID already exists in the cart
        const existingCartItem = listCart.find(item => item.itemId === itemID);

        if (existingCartItem) {
            // If it exists, increment the quantity
            existingCartItem.quantity += 1;
        } else {
            // If it doesn't exist, add a new item to the cart
            listCart.push({ itemId: itemID, quantity: 1 });
        }

        const updatedUser = await userCollection.findOneAndUpdate(
            { userEmail: userEmail },
            { cart: listCart },
            { new: true }
        );

        return res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'An error occurred while updating the cart' });
    }
});


api.get("/cartRemove/:itemID/:userEmail", async (req, res) => {
    try {
        const userEmail = req.params.userEmail;
        const itemID = req.params.itemID;
        const userFind = await userCollection.findOne({ userEmail: userEmail });

        if (!userFind) {
            return res.status(404).json({ error: 'User not found' });
        }

        const listCart = userFind.cart;

        const existingCartItem = listCart.find(item => item.itemId === itemID);

        if (!existingCartItem) {
            return res.status(404).json({ error: 'Item not found in the cart' });
        }

        if (existingCartItem.quantity > 1) {
            existingCartItem.quantity -= 1;
        } else {
            // If quantity is 1, remove the item from the cart
            listCart.splice(listCart.indexOf(existingCartItem), 1);
        }

        // Update the user's cart with the modified list
        const updatedUser = await userCollection.findOneAndUpdate(
            { userEmail: userEmail },
            { cart: listCart },
            { new: true }
        );

        return res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'An error occurred while updating the cart' });
    }
});

 
export { app };