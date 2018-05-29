import { Component, OnInit } from "@angular/core";
import { ItemService } from "../../services/item.service";
import { Item } from "../../models/item";
import { randomBytes } from "crypto";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.css"]
})
export class ItemsComponent implements OnInit {
  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;
  constructor(public itemService: ItemService) {}

  ngOnInit() {
    this.itemService.getItems().subscribe(item => {
      this.items = item;
    });
  }
  deleteItem(e, item: Item) {
    this.clearState();
    this.itemService.deleteItem(item);
  }

  editItem(e, item: Item) {
    this.editState = true;
    this.itemToEdit = item;
  }

  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }

  updateItem(item: Item) {
    this.itemService.updateItem(item);
    this.clearState();
  }
}
