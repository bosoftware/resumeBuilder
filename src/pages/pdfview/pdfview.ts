import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProfileDataProvider} from '../../providers/profile-data/profile-data';
import {EducationModel} from '../../model/education-model';
import {ExperienceModel} from '../../model/experience-model';
import {ProjectDetailsModel} from '../../model/project-model';
import {ReferenceModel} from '../../model/reference-model';

import * as pdfmake from 'pdfmake/build/pdfmake';
/**
 * Generated class for the PdfviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pdfview',
  templateUrl: 'pdfview.html',
})

export class PdfviewPage {

  name: string;
  sex: string;
  dateOfBirth: string;
  address: string;
  language: string;
  contractNo: string;
  email: string;
  imagePath: string = '';
  educationList: Array<EducationModel> = [];
  experienceList: Array<ExperienceModel> = [];
  projectDetailsList: Array<ProjectDetailsModel> = [];
  referenceList: Array<ReferenceModel> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private profileDataProvider: ProfileDataProvider) {


  }

  getAllData() {
    this.profileDataProvider.getValue(this.profileDataProvider.NAME).then((value) => {
      this.name = value;
    });
    this.profileDataProvider.getValue(this.profileDataProvider.SEX).then((value) => {
      this.sex = value;
    });
    this.profileDataProvider.getValue(this.profileDataProvider.DATEOFBIRTH).then((value) => {
      this.dateOfBirth = value;
    });
    this.profileDataProvider.getValue(this.profileDataProvider.ADDRESS).then((value) => {
      this.address = value;
    });
    this.profileDataProvider.getValue(this.profileDataProvider.LANGUAGE).then((value) => {
      this.language = value;
    });
    this.profileDataProvider.getValue(this.profileDataProvider.CONTRACT_NO).then((value) => {
      this.contractNo = value;
    });
    this.profileDataProvider.getValue(this.profileDataProvider.EMAIL).then((value) => {
      this.email = value;
    });
    this.profileDataProvider.getValue(this.profileDataProvider.IMAGE_PATH).then((value) => {
      if (value != null) {
        this.imagePath = value;
      }
    });
    this.profileDataProvider.getValue(this.profileDataProvider.EDUCATION_LIST).then((value) => {
      if (value != null) {
        this.educationList = value;
      }
    });
    this.profileDataProvider.getValue(this.profileDataProvider.EXPERIENCE_LIST).then((value) => {
      if (value != null) {
        this.experienceList = value;
      }
    });
    this.profileDataProvider.getValue(this.profileDataProvider.PROJECT_LIST).then((value) => {
      if (value != null) {
        this.projectDetailsList = value;
      }
    });
    this.profileDataProvider.getValue(this.profileDataProvider.REFERENCE_LIST).then((value) => {
      if (value != null) {
        this.referenceList = value;
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PdfviewPage');
    this.getAllData();

  }
  getImageString() {
    if (this.imagePath.length > 0) {
      return { width: '20%', image: " + this.imagePath + " };
    } else {
      return { width: '20%', text: '' };
    }
  }



  getEducationList() {
    var educationItems = this.educationList.map(function(education) {

      var dateString = education.completionDate;
      return [education.degree, education.school, education.cgpa, '' + dateString];
    });
    var string = { style: 'table', table: { body: [['Degree Or Certificate', 'University or Institute', 'Percentage or CGPA', 'Passing Year']].concat(educationItems) } };
    return string;
  }

  getExperienceList() {
    var experienceItems = this.experienceList.map(function(experienceItem) {
      var string = {
        columns: [
          {
            width: '40%',
            text: 'Organization: \n Position: \n Duration: \n Location:\n Salary:\n Job Responsibilities:\n'
          },
          {
            width: '60%',
            text: experienceItem.organization + '\n' + experienceItem.position + '\n' + experienceItem.durationFrom + ' ' + experienceItem.durationTo + '\n' + experienceItem.location + '\n' + experienceItem.salary + '\n' + experienceItem.jobResponsibility
          }
        ]
      }
      return string;
    });
    return experienceItems;
  }

  getProjectDetailsList() {
    var projectItems = this.projectDetailsList.map(function(projectDetailItem) {
      var string = {
        columns: [
          {
            width: '40%',
            text: 'Project Title: \n Project Duration: \n Role: \n Team Size:\n Expertise:\n'
          },
          {
            width: '60%',
            text: projectDetailItem.projectTitle + '\n' + projectDetailItem.projectFrom + ' ' + projectDetailItem.projectTo + '\n' + projectDetailItem.role + ' ' + projectDetailItem.teamSize + '\n' + projectDetailItem.expertise + '\n'
          }
        ]
      }
      return string;
    });
    return projectItems;
  }

  getReferenceList() {
    var referenceItems = this.referenceList.map(function(referenceItem) {
      var string = {
        columns: [
          {
            width: '40%',
            text: 'Reference Name: \n Reference Details: \n Reference Contact No: \n Reference Email:\n'
          },
          {
            width: '60%',
            text: referenceItem.name + '\n' + referenceItem.details + '\n' + referenceItem.contactNo + '\n' + referenceItem.email + '\n'
          }
        ]
      }
      return string;
    });
    return referenceItems;
  }

  generatePdf() {
    var dd = {
      content: [
        {
          text: this.name,
          style: 'header'
        },
        {
          columns: [
            {

              width: '80%',
              text: 'Gender:    ' + this.sex + '\n Contact No: ' +
              this.contractNo
              + ' \n Email:     ' +
              this.email +
              ' \n D.o.B:       ' + this.dateOfBirth + ' \n Language: ' +
              this.language
              + ' \n Address:   ' +
              this.address
              + ''
            },
            this.getImageString()
          ],
          columnGap: 10
        },
        {
          table: {
            widths: ['*'],
            body: [[" "], [" "]]
          },
          layout: {
            hLineWidth: function(i, node) {
              return (i === 0 || i === node.table.body.length) ? 0 : 2;
            },
            vLineWidth: function(i, node) {
              return 0;
            },
          }
        },
    				{
          text: 'Education Details:',
          style: 'header'
        },
        this.getEducationList()
        ,
        {
          table: {
            widths: ['*'],
            body: [[" "], [" "]]
          },
          layout: {
            hLineWidth: function(i, node) {
              return (i === 0 || i === node.table.body.length) ? 0 : 2;
            },
            vLineWidth: function(i, node) {
              return 0;
            },
          },

        },

        {
          text: 'Experience Details:',
          style: 'header'
        },
        this.getExperienceList(),
        {
          table: {
            widths: ['*'],
            body: [[" "], [" "]]
          },
          layout: {
            hLineWidth: function(i, node) {
              return (i === 0 || i === node.table.body.length) ? 0 : 2;
            },
            vLineWidth: function(i, node) {
              return 0;
            },
          },
        },

        {
          text: 'Project Details:',
          style: 'header'
        },
        this.getProjectDetailsList()
        ,
        {
          table: {
            widths: ['*'],
            body: [[" "], [" "]]
          },
          layout: {
            hLineWidth: function(i, node) {
              return (i === 0 || i === node.table.body.length) ? 0 : 2;
            },
            vLineWidth: function(i, node) {
              return 0;
            },
          },
        },
        {
          text: 'Reference Details:',
          style: 'header'
        },
        this.getReferenceList(),
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true
        },
        subheader: {
          fontSize: 15,
          bold: true
        },
        quote: {
          italics: true
        },
        small: {
          fontSize: 8
        },
        table: {
          margin: [0, 5, 0, 15]
        },
      }
    };
    pdfmake.createPdf(dd).download();
  }
}
