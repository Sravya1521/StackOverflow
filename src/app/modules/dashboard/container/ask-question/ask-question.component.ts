import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import { Router } from '@angular/router';
import { AllServicesService } from 'src/app/modules/all-services.service';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})

export class AskQuestionComponent implements OnInit {
  myTag = new FormControl();
  options: Tag[] = [];
  filteredOptions: Observable<Tag[]>;

  questionForm:FormGroup;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  addoptions:Tag[] = [];
  len:number;
  object:Tag;

  @ViewChild('TagInput', {static: false}) TagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;

  constructor(private fb:FormBuilder,private router:Router,private service:AllServicesService) { }

  ngOnInit() {
    this.questionForm= this.fb.group({
      title: ['',[Validators.required]],
      description: ['', [Validators.required]],
      tag: ['', [Validators.required]],
    });
    this.service.getTags().subscribe((data:any) => {
      this.len = data.length;
      data.forEach(element => {
        this.options.push(element);
      });
    });
    this.filteredOptions = this.myTag.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options)
      );
  }

  // displayFn(user?: Tag): string | undefined {
  //   return user ? user.name : undefined;
  // }

  private _filter(name: string): Tag[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }



  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;
      this.object = {name:value,id:++this.len}
      // Add our fruit
      if (value) {
        this.addoptions.push(this.object);
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

     // this.myTag.setValue(null);
    }
  }

  remove(tag: any): void {
    const index = this.addoptions.indexOf(tag);
    if (index >= 0) {
      this.addoptions.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.addoptions.push(event.option.value);
    this.TagInput.nativeElement.value = '';
    //this.myTag.setValue(null);
  }

  postQuestion() {
    let description = this.questionForm.get('description').value.split("\n");
    let finalDescription = "";
    for(var i=0;i<description.length;i++) {
      finalDescription += description[i]+"<br/>";
    }
    console.log(finalDescription);

    let postdata = {
      title:this.questionForm.get('title').value,
      description:this.questionForm.get('description').value,
      comments:[],
      answers:[],
      tags:this.addoptions
    }
   // console.log(postdata);
    this.service.postQuestion(postdata).subscribe((data) => {
      this.router.navigateByUrl('dashboard/stackoverflow');
    });
  }

}

export interface Tag {
  name: string;
  id:number;
}


