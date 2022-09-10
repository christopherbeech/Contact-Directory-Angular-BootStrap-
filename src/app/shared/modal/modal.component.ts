import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "modal-component",
    templateUrl: "./modal.component.html",
    styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit{

    constructor(){}

    @Input() modal: boolean = false;


    ngOnInit(): void {
        this.modal = false;
    }

    onClickModal(): void {
        this.modal = !this.modal;
    }

}