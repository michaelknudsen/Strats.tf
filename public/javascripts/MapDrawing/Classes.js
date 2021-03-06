//tools have a field called type which is either 'pressed' or 'clicked'
//clicked will only draw once on mouse press, multi will draw while mouse is pressed

function EraseTool(){
    this.eraserSize = 30;
    this.type = 'pressed';
    this.action = function(graphics){
        //TODO: remove stickers, current thought is to store all stickers on one graphic, and in an array
        graphics.erase(255)
        graphics.ellipse(mouseX, mouseY, this.eraserSize,this.eraserSize);
        graphics.noErase();
    }
    this.cursor = function(){
        stroke(255,255,255)
        fill(0, 0, 0, 0);
        ellipse(mouseX, mouseY, this.eraserSize, this.eraserSize);
    }
}

function DrawTool(){
    this.thicc = 3; //default 1
    this.type = 'pressed';
    this.action = function(graphics){
        graphics.fill(0);
        graphics.strokeWeight(this.thicc);
        graphics.stroke(255,0,0);
        graphics.line(mouseX, mouseY, pmouseX, pmouseY);  
    }
    this.cursor = function(){
    }
}

function Sticker(...args){
    this.name = args[0];
    this.x = args[1];
    this.y = args[2];
    this.image = ClassIconsMap[this.name];
}

function StickerTool(stickerName){
    this.name = stickerName;
    this.type = 'click';
    this.action = function(graphics){
        //place class icon
        graphics.image(ClassIconsMap.get(this.name),mouseX-25,mouseY-25,50,50);
    }
    this.cursor = function(){
        image(ClassIconsMap.get(this.name),mouseX-25,mouseY-25,50,50);
    }
}

const drawTool = new DrawTool(); 
const eraseTool = new EraseTool();
var CurrentTool = drawTool;

/* es6 wasnt working in browser :(
class Tool{
    constructor(){
        if (this.constructor === Tool){
            throw new Error("Object of Abstract Class cannot be created");
        }
    }
    action() {
        throw new Error("Abstract Method 'action' has no implementation");
    }
    cursor() {
        throw new Error("Abstract Method 'cursor' has no implementation");
    }

}

class EraseTool extends Tool{
    constructor(arguments){
        console.log(arguments)
    }
    action(graphics){
        graphics.erase(255)
        graphics.ellipse(mouseX, mouseY, this.eraserSize,this.eraserSize);
        graphics.noErase();
    }
    cursor(){
        stroke(255,255,255)
        fill(0, 0, 0, 0);
        ellipse(mouseX, mouseY, this.eraserSize, this.eraserSize);
    }
}

class DrawTool extends Tool{
    constructor(arguments){
        console.log(arguments)
        this.eraserSize = 30;
    }
    action(graphics){
        graphics.fill(0);
        graphics.stroke(255,0,0);
        graphics.line(mouseX, mouseY, pmouseX, pmouseY);  
    }
    cursor(){
        
    }
}*/


/*wack ass protoyping
 var Tool = function(){
    if(this.constructor === Tool){
        throw new Error("Can't instantiate abstract class!");
    }
}

 Tool.prototype.action = function() {
    throw new Error("Abstract method action");
}
Tool.prototype.cursor = function() {
    throw new Error("Abstract method cursor");
}

//define draw tool
var DrawTool = function(){
    Tool.apply(this, arguments);
}
DrawTool.prototype = Object.create(Tool.prototype);
DrawTool.prototype.constructor = DrawTool;
DrawTool.prototype.action = function(graphics) {
    graphics.fill(0);
    graphics.stroke(255,0,0);
    graphics.line(mouseX, mouseY, pmouseX, pmouseY);
    
}
DrawTool.prototype.cursor = function(){}

//Erase too
var EraseTool = function(){
    Tool.apply(this, arguments);
}
EraseTool.prototype.eraserSize = 30
EraseTool.prototype = Object.create(EraseTool.prototype);
EraseTool.prototype.constructor = EraseTool;
EraseTool.prototype.action = function(graphics) {
    graphics.erase(255)
    graphics.ellipse(mouseX, mouseY, this.eraserSize,this.eraserSize);
    graphics.noErase();
    
}
EraseTool.prototype.cursor = function(){
    stroke(255,255,255)
    fill(0, 0, 0, 0);
    ellipse(mouseX, mouseY, this.eraserSize, this.eraserSize);
}
*/
