import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import {Observable} from 'rxjs';
import {map ,startWith} from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { MatTableDataSource, MatSort,MatPaginator } from '@angular/material'; //for filtering in tables


//data tool tips
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

//till here 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 

  numbers=[];

  // @ViewChild(MatSort) sort:MatSort;

// @ViewChild(MatPaginator) paginator:MatPaginator;
  constructor(private snackbar:MatSnackBar, public dialog: MatDialog){

    for(let i=0;i<1000;i++)
    {
      this.numbers.push(i);
    }
  }

  //data tool tips: copied from the angular material documents: 
  

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol']; 
  //above one shows the columns need to be showd if remove that will be removed form the front end even in the html given and also order is must
  // dataSource = ELEMENT_DATA;  earlier for the datasource before filtering

  dataSource=new MatTableDataSource(ELEMENT_DATA); //for filtering the data create an instance of Mattabledatasource


  //filter the data having in the mattabledatasource using the filter 
  applyFilter(filterValue:string)
  {
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }




  //till here data tool tips
 openDialog(){
   //open methods,
   let dialogRef=this.dialog.open(DialogExampleComponent, {data:{name:'Vishwas'}});
   dialogRef.afterClosed().subscribe(result=>{
     console.log(`Dialog result : ${result}`);
   });
 }

  openSnackBar(message,action)
  {
    let snackBarRef=this.snackbar.open(message,action, {duration:2000});

    snackBarRef.afterDismissed().subscribe(()=>{
      console.log('the snackbar was dismissed');
    });
    snackBarRef.onAction().subscribe(()=>{
      console.log('the snackbar action was triggered');
    });
  }


  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.filteredOptions=this.myControl.valueChanges.pipe(
      startWith(''),
      map(value=>this._filter(value))
    );

    // this.dataSource.sort=this.sort;
  }

  private _filter(value:string):string[]{
    const filterValue=value.toLowerCase();
    return this.options.filter(
      option=>option.toLowerCase().includes(filterValue)
    );
  }




  selectedValue:string;

  options:string[]=['Angular', 'React', 'Vue'];

  objectOptions=[
    {name:'Angualr'},
    {name:'Angualr Materials'},
    {name:'React'},
    {name:'Vue'}
  ];

  myControl=new FormControl();
  filteredOptions:Observable<string[]>;

  displayFn(subject)
  {
    return subject? subject.name: undefined;
  }

  title = 'PankajApp';
  notifications=2;


  opened=false;

  log(state)
  {
    console.log(state);
  }

  showSpinner=false;

  logChange(index)
  {
    console.log(index);
  }

  loadData(){
    this.showSpinner=true;
    setTimeout(()=>{
      this.showSpinner=false;
    },5000);
  }
}
