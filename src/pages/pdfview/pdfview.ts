import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProfileDataProvider} from '../../providers/profile-data/profile-data';
import * as pdfmake from 'pdfmake/build/pdfmake';
/**
 * Generated class for the PdfviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 declare var cordova: any;


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
  imageUrl:string;
  imagePath:string='';
  constructor(public navCtrl: NavController, public navParams: NavParams, private profileDataProvider: ProfileDataProvider) {


  }

  getAllData(){
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
    this.profileDataProvider.getValue(this.profileDataProvider.IMAGE_URL).then((value) => {
      this.imageUrl = value;
      this.imagePath=cordova.file.dataDirectory + this.imageUrl;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PdfviewPage');
    this.getAllData();

  }


  generatePdf() {
    var dd = {
      content: [
        {
          text: '\''+this.name+'\'',
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
            {

              width: '20%',

              image: this.imagePath
            }
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

        {
          style: 'table',
          table: {
            body: [
              ['Degree Or Certificate', 'University or Institute', 'Percentage or CGPA', 'Passing Year'],
              ['One value goes here', 'Another one here', 'OK?', 'a']
            ]
          }
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
          },

        },

        {
          text: 'Experience Details:',
          style: 'header'
        },


    				{
          columns: [
            {

              width: '40%',
              text: 'Organization: \n Position: \n Duration: \n Location:\n Salary:\n Job Responsibilities:\n'
            },
            {

              width: '60%',
              text: 'organization\n position\nduration\nlocation\n salary\n job responseibl'
              //image: 'data:image/jpeg;base64, image'
            }
          ],
          columnGap: 0
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
          },




        },

        {
          text: 'Project Details:',
          style: 'header'
        },

    				{
          columns: [
            {

              width: '40%',
              text: 'Project Title: \n Project Duration: \n Role: \n Team Size:\n Expertise:'
            },
            {

              width: '60%',
              text: 'title\n duration\nrole\n team size\n expertise'
              //image: 'data:image/jpeg;base64, image'
            }
          ],
          columnGap: 0
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
          },




        },
        {
          text: 'Reference Details:',
          style: 'header'
        },

    				{
          columns: [
            {

              width: '40%',
              text: 'Reference Name: \n Reference Details: \n Reference Contact No: \n Reference Email:\n'
            },
            {

              width: '60%',
              text: 'title\n duration\nrole\n team size\n expertise'
              //image: 'data:image/jpeg;base64, image'
            }
          ],
          columnGap: 0
        },


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
