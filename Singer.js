class Singer{
    constructor(name,image,link){
        this.id =Math.round(Math.random()*10000);
        this.name = name;
        this.image =  image;
        this.link= link;
    }
    static add(name,image,link){
        const ten = new Singer(name ,image ,link);
        singers.push(ten);
    }
    static remove(id){
        const a = singers.findIndex(si => si.id == id);
        if(a ===-1) return false;
        singers.splice(a,1);
        return true;
    }
    static update(id ,name,image,link){
        const teni = singers.find(sn=>sn.id==id);
        if(!teni) return false;
        teni.name = name;
        teni.image = image;
        teni.link = link;
        return true;

    }

}
const singers = [
   new Singer('Ngọc Dolil','https://zmp3-photo.zadn.vn/thumb/240_240/avatars/b/b/bbbee024a18e075d34a14159585e0b53_1518238323.png','https://mp3.zing.vn/nghe-si/Ngoc-Dolil'),
   new Singer('Karik','https://zmp3-photo.zadn.vn/thumb/240_240/avatars/a/0/a0927398989d4c5b18c56880bd56442b_1509531352.jpg','https://mp3.zing.vn/nghe-si/Karik'),
   new Singer('Đạt G','https://zmp3-photo.zadn.vn/thumb/240_240/avatars/c/5/c5c7d43a4c72761be22c07e3db01cd0e_1511498945.jpg','https://mp3.zing.vn/nghe-si/Dat-G'),
];

module.exports = {Singer,singers};