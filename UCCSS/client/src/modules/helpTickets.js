import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { HelpTicket } from '../resources/data/help-ticket-object';

@inject(HelpTicket)
export class HelpTickets {

    constructor(helpTicket) {
        this.helpTickets = helpTicket;
        this.showHelpTicketEditForm = false;
        this.message = "HelpTickets";
        this.userObj = JSON.parse(sessionStorage.getItem('userObj'));
    }

    async activate() {
        // await this.getHelpTicket();
        await this.helpTickets.getHelpTickets(this.userObj);
    }

    showEditForm() {
        this.showHelpTicketEditForm = true;
        setTimeout(() => { $("#firstName").focus(); }, 500);
    }

    async getHelpTicket() {
        await this.helpTickets.getHelpTickets(this.userObj);
    }
    attached() {
        feather.replace()
    }

    newHelpTicket() {
        this.helpTicket = {
            title: "",
            personId: this.userObj._id,
            ownerId: "a1a1a1a1a1a1a1a1a1a1a1a1",
            status: 'new'
        };
        this.helpTicketContent = {
            personId: this.userObj._id,
            content: "",
            // dateCreated: ""
        };
        this.showEditForm();
    }

    async editHelpTicket(helpTicket) {
        this.helpTicket = helpTicket;
        this.helpTicketContent = {
            personId: this.userObj._id,
            content: ""
        };
        await this.helpTickets.getHelpTicketsContents(helpTicket._id);  //this line of code is not working.  Cannot see discription of helpTicketContent
        // console.log(this.helpTickets.getHelpTicketsContents(helpTicket._id));
        this.showEditForm();
    }
    back() {
        this.helpTicketscontentArray = [];
        this.showHelpTicketEditForm = false;
    }

    async saveHelpTicket() {
        if (this.helpTicket && this.helpTicket.title && this.helpTicketContent && this.helpTicketContent.content) {
            if (this.userObj.role !== 'user') {
                this.helpTicket.ownerId = this.userObj._id;
            }
            let helpTicket = { helpTicket: this.helpTicket, content: this.helpTicketContent };
            await this.helpTickets.saveHelpTicket(helpTicket);
            await this.getHelpTicket();
            this.back();
        }
    }

    async deleteHelpTicket() {
        console.log('did not delete');
        if (this.helpTicket) {
            await this.helpTickets.deleteHelpTicket(this.helpTicket);
            await this.getHelpTicket();
            this.back();
            console.log('maybe deleted');
        }
    }


}