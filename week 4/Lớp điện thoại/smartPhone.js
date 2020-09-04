let nokia = new Phone(nokia, mess);
let iphone = new Phone(iphone, mess);

function Phone(name, id) {
    this.id = id;
    this.name = name;
    this.pin = 100;
    this.mess = "";
    this.inbox = [];
    this.sent = [];
    this.status = false;


    this.on = function () {
        this.status = true;
    }

    this.off = function () {
        this.status = false;
    }

    this.isStatus = function () {
        if (this.status == true) {
            return "Bật";
        } else return "Tắt";
    }

    this.SupperChange = function () {
        if(this.pin < 100){
            this.pin++;
        }
        
    }

    this.editMess = function(mobile,messinger){
        mobile.mess = Mess
    }

    this.inboxMess = function(){
        return this.inbox;
    }

    this.sentMess = function(mobile, messinger){
        mobile.inbox.unShift(messinger);
    }

}

let iphone = new Phone();

