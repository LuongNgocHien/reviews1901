const express = require('express');
const reload = require('reload');
const parser = require('body-parser').urlencoded({extened: false}); 
const app = express();
const {Singer, singers} = require('./Singer');

app.listen(3000, () => console.log('Server Started'));
app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
     res.render('Home',{singers});
});
app.get('/remove/:id',(req,res)=>{
   const {id} = req.params;//id trả về là chuổi hoặc số
    const remove = Singer.remove(id);
    if(!remove) return res.send('không tìm thấy ca sĩ cần xóa');
    res.redirect('/');
});
app.get('/add',(req,res)=>{
    res.render('add');
});
app.post('/add', parser, (req,res)=>{
   const {name , image ,link} = req.body;
   Singer.add(name , image ,link); 
   res.redirect('/');
});
app.get('/update/:id',(req,res)=>{
   const {id} = req.params;
   const na =  singers.find(s=> s.id==id);
   if(!na) {return res.send('không tìm thấy ca sĩ cần update')};
   res.render('update',{na});
});
app.post('/update/:id', parser, (req,res)=>{
    const {name , image ,link} = req.body;
    const {id} = req.params;
    const update = Singer.update(id , name,image,link);
    if(!update) return res.send('không tìm thấy ca sĩ cần update');
    res.redirect('/');
 });




// app.post('/update/:id', parser , (req,res )=>{

// });




reload(app);

