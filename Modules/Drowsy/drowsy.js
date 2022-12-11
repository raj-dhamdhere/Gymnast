import execFilee from "child_process";

class DrowsyX {
    constructor() { }
    async drowsy(userData) {

        
        if (userData.condition) {
            console.log("started")
            const execFile = execFilee.execFile;
            const processed = execFile('python', ['./drowsiness detection.py']);
        }else{
            console.log("khatam")
        }
    }


}

export default DrowsyX;
