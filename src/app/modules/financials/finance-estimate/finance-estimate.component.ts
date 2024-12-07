  import { Component, Inject, ViewChild } from '@angular/core';
  import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
  import { AppConfig } from 'src/app/core/app-config';
import { DynamicField, EntityTypes, FieldTypes } from '../../custom-fields/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddFinanceEstimateComponent } from '../add-finance-estimate/add-finance-estimate.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactService } from './../../../core/services/contact.service';
import { FieldService } from 'src/app/core/services/field.service';
import { CreatePhoneNumbersDto } from '../../contact/CreatePhoneNumbersDto';
import { CreateContactDto } from '../../contact/CreateContactDto';
import { Subscription } from 'rxjs';

  @Component({
    selector: 'app-finance-estimate',
    templateUrl: './finance-estimate.component.html',
    styleUrls: ['./finance-estimate.component.css']
  })
  export class FinanceEstimateComponent {
  
  }
