import express from 'express';
const app = express();
import Course from './models/course.model.js';
import Quiz from './models/quiz.model.js';
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("hello world");
});




app.get('/authentication', async (req, res) => {
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



app.post("/register/:userEmail/:userPassword/:userName", async (req, res) => {
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


app.post("/login/:userEmail/:userPassword", async (req, res) => {
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



app.post('/addcourses', async (req, res) => {
    const {heading,description,owner,story} = req.body;

    try {
        const savedCourse = new Course({heading,description,owner,story});
        await savedCourse.save();
        res.status(201).send(savedCourse);
    } catch (error) {
        res.status(400).send(error);
    }
});
 
app.post('/addquizzes', async (req, res) => {
    const { title, description, questions } = req.body;

    try {
        const newQuiz = new Quiz({ title, description, questions });
        await newQuiz.save();
        res.status(201).send(newQuiz);
    } catch (error) {
        res.status(400).send(error);
    }
});


export { app };