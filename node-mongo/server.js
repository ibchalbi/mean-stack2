import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Comment from './models/Comment';
import { runInNewContext } from 'vm';

const app= express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/comments');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connected')
});

router.route('/comments').get((req, res) => {
    Comment.find((err, comments) => {
        if (err)
            console.log(err);
        else
            res.json(comments);
    });
});


router.route('/comments/:id').get((req, res) =>{
    comment.findById(req.params.id,(err, comment)=>{
        if (err)
        console.log(err);
    else
        res.json(comment);
    });
});


router.route('/comments/add').post((req, res) =>{
  let comment = new Comment(req.body);
  comment.date=new Date();
  comment.save().then(comment => {
      res.status(200).json({'comment': 'added comment'});
  }).catch(err => {
      res.status(400).send('failed to add');
  });
  
});

router.route('/comments/update/:id').post((req, res) =>{
    Comment.findById(req.params.id, (err,comment) => {
        if (!comment)
            return runInNewContext(new Error('Could not load dox'));
        else
        {
            
            comment.title = req.body.title;
            comment.responsible = req.body.responsible;
            comment.content=req.body.content;
            
            comment.save().then(comment=>{
                res.json('Update done');
            }).catch(err=>{
                res.status(400).send('update failed');
            });
        }
    });
    
  });

  router.route('/comments/delete/:id').get((req, res) =>{
    Comment.findByIdAndRemove({_id: req.params.id},(err, comment) =>{
        if(err)
            res.json(err);
        else    
            res.json("Removed succesfully");
    });
    
  });

app.use('/', router);

app.listen(4000, () => console.log('Express server is running: port 4000'));