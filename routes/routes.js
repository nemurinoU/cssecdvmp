import { Router } from "express";
import controller from '../controllers/controller.js';
import bodyParser from 'body-parser';
import loginController from "../controllers/loginController.js";

import multer from 'multer';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

const router = Router();

//BOILERPLATE
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//GETS
router.get(`/`, controller.getIndex);
router.get(`/cafe/:cafeName`, controller.cafe);
router.get(`/about`, controller.getAbout);
router.get(`/cafe`, controller.getCafes);

//Log in get
router.get(`/register`, loginController.getRegister);
router.get(`/login`, loginController.getLogin);
router.get(`/logout`, loginController.logout);

//log in post
router.post(`/login`, loginController.loginAuth);
router.post(`/register_process`, loginController.register_process)

//profile gets
router.get(`/myprofile`, controller.profile);
router.get(`/settings`, controller.settings);
router.get(`/user/:username`, controller.userProfile);

router.post(`/updateprofile`,upload.single('dp_upload'), controller.updateProfile)

//POSTS
router.post('/addReview', controller.addReview);
router.post(`/cafe`, controller.searchcafes);
router.post(`/reply`, controller.reply);

//DELETES
router.delete('/deleteReview', controller.deleteReview);

//UPDATES
router.put('/editReview', controller.editReview);
router.put('/upvote', controller.upvote);
router.put('/downvote', controller.downvote);


export default router;