const bcrypt = require('bcrypt')

module.exports = {
    register: async (req,res) => {
        const db = req.app.get("db");
        const {username, password} = req.body;

        const existingUser = await db.existing_user(username);
        console.log(existingUser)
        if (existingUser[0]) {
            return res.status(409).send("Username is already taken")
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = await db.register_user([username, hash]);

        req.session.user = {
            userId: newUser[0].id,
            username: newUser[0].username
        }
        res.status(200).send(req.session.user)
    },

    signIn: async (req, res) => {
        const db = req.app.get("db");
        const {username, password} = req.body

        const user = await db.check_user(username)
        if (!user[0]) {
            return res.status(400).send("User doesn't exist")
        }else{
            const authenticated = bcrypt.compareSync(password, user[0].password)
            if (authenticated) {
                req.session.user = {
                    userId: user[0].id,
                    username: user[0].username
                };
                res.status(200).send(req.session.user);
            }else{
                res.status(403).send("Username or Password is incorrect")
            }
        }
    },

    logout: (req, res) => {
        req.session.destroy()
        console.log(req.session)
        res.sendStatus(200)
    },

    getUser: (req, res) => {
        if (req.session.user) {
          res.status(200).send(req.session.user);
        } else {
          res.status(404).send("Username or Password Incorrect");
        }
      }

    
     
}