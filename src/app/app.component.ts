import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from "firebase/app";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Gloria-foods & Beverages";
  registerForm: FormGroup;
  submitted = false;
  public addType: boolean = true;
  public items: Array<any> = [];

  public itemRef: firebase.database.Reference;
  constructor(
    private db: AngularFireDatabase,
    private formBuilder: FormBuilder,
    private ref: ChangeDetectorRef
  ) {}
  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        title: ["", Validators.required],
        name: ["", Validators.required, Validators.name],
        number: ["", [Validators.required, Validators.minLength(10)]],
        address: ["", Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
      },
      {}
    );
    this.getAll();
  }
  get f() {
    return this.registerForm.controls;
  }
  getAll() {
    this.itemRef = firebase.database().ref("/users/");
    this.itemRef.on("value", (itemSnapshot) => {
      this.items = [];
      itemSnapshot.forEach((itemSnap) => {
        console.log(itemSnap);
        this.items.push({
          id: itemSnap.key,
          value: itemSnap.val(),
        });
        return false;
      });
      console.log(this.items);
      this.ref.detectChanges();
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);

    this.db.list("users").push(this.registerForm.value);
    this.addType = false;
    this.onReset();
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
  goBack() {
    this.addType = true;
  }
  goToList() {
    this.addType = false;
  }
}
