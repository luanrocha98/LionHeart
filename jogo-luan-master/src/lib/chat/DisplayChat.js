"use strict";
class DisplayChat extends Chat {
    constructor(id, message = "") {
        super();
        this.canvas = document.getElementById(id);
        this.context = Display.canvas.getContext('2d');
        let sizeInPercentage = 0.98;
        this.margin = this.canvas.width * ((1 - sizeInPercentage) / 2);
        this.width = this.canvas.width * (sizeInPercentage);
    }
    drawWindow() {
        this.context.fillStyle = this.backgroundColor;
        this.context.fillRect(this.margin, (this.canvas.height - this.height - 5), this.width, this.height);
    }
    drawTitle(title, color) {
        this.context.font = `${(this.fontSize * 0.7)}px Arial`;
        this.context.fillStyle = color || this.fontColor;
        this.context.fillText(title, (this.fontSize), (this.canvas.height - this.height) + this.fontSize);
    }
    drawMessage(message, color) {
        this.context.font = `${this.fontSize}px Helvetica`;
        this.context.fillStyle = color || this.fontColor;
        let textPosition = ((this.context.measureText(message).width) < (this.width * 0.8))
            ? (this.width / 2) - (this.context.measureText(message).width / 2)
            : (this.width / 2) - ((this.width * 0.8) / 2);
        this.context.fillText(message, textPosition, (this.canvas.height - this.height) + (this.height / 2) + (this.fontSize / 4), this.width * 0.8);
    }
    drawSurvey(survey, title, color) {
        this.drawTitle(title || "");
        let optionTitleList = survey.getOptions().map((el) => { return { text: el.title, selected: survey.selected === el.id }; });
        this.drawList(optionTitleList);
    }
    drawBattle(battle, title) {
        this.drawTitle(title || "");
        let width = this.width * 0.7;
        let height = this.height * 0.5;
        let bar_width = width * 0.005;
        let bar_height = height - 8; // height - line width * 2
        let critical_width = (width * 0.005) * (battle.barCritical * 2);
        let critical_height = height; // height - line width * 2
        this.context.strokeStyle = "orange";
        this.context.lineWidth = 4;
        this.context.strokeRect((this.width / 2) - (width / 2) + (width / 2) - (critical_width / 2), (this.canvas.height - this.height) + ((this.height / 2) - (height / 2)), critical_width, critical_height);
        this.context.strokeStyle = "darkblue";
        this.context.lineWidth = 4;
        this.context.strokeRect((this.width / 2) - (width / 2), (this.canvas.height - this.height) + ((this.height / 2) - (height / 2)), width, height);
        this.context.strokeStyle = "darkred";
        this.context.lineWidth = 4;
        this.context.strokeRect((this.width / 2) - (width / 2) + (bar_width * (battle.barIndex)), (this.canvas.height - this.height) + ((this.height / 2) - (height / 2)) + this.context.lineWidth, bar_width, bar_height);
        if (battle.lastBetter !== null)
            this.context.strokeRect((this.width / 2) - (width / 2) + (bar_width * (battle.lastBetter)), (this.canvas.height - this.height) + ((this.height / 2) - (height / 2)) + this.context.lineWidth, bar_width, bar_height);
    }
    drawList(items) {
        this.context.font = `${this.fontSize * 0.8}px Arial`;
        let margin = this.height - ((this.fontSize * items.length) + (items.length * 10));
        items.forEach((option, index) => {
            let textPosition = ((this.context.measureText(option.text).width) < (this.width * 0.8))
                ? (this.width / 2) - (this.context.measureText(option.text).width / 2)
                : (this.width / 2) - ((this.width * 0.8) / 2);
            this.context.fillStyle = (option.selected === true) ? "red" : "black";
            this.context.fillText(option.text, textPosition, (this.canvas.height - this.height) + (margin) + ((this.fontSize) * index) + (index * 10), this.width * 0.8);
        });
    }
    drawDialog(dialog, title, color) {
        this.drawTitle(title || "", color);
        this.drawMessage(dialog.content, color);
    }
    /// Une os nomes dos atores de um dialogo e separa por virgula
    joinNames(dialog) {
        let namesToTitle = dialog.speakers.map((el) => el.name);
        (namesToTitle.length > 1)
            ? namesToTitle.join(', ')
            : namesToTitle.join('');
    }
}
