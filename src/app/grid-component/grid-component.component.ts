import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-component',
  templateUrl: './grid-component.component.html',
  styleUrls: ['./grid-component.component.scss']
})
export class GridComponentComponent implements OnInit {
  all = false;

  activeFields = {
    textActive: true,
    textImageLActive: false,
    textImageRActive: false,
    imageImageActive: false,
    cornerImageActive: false,
    cornerImageRActive:false
  };

  // tslint:disable-next-line: max-line-length
  DEMO_TEXT = 'Health care, health-care, or healthcare is the maintenance or improvement of health via the prevention, diagnosis, and treatment of disease, illness, injury, and other physical and mental impairments in people. Health care is delivered by health professionals in allied health fields. Physicians and physician associates are a part of these health professionals. Dentistry, midwifery, nursing, medicine, optometry, audiology, pharmacy, psychology, occupational therapy, physical therapy and other health professions are all part of health care. It includes work done in providing primary care, secondary care, and tertiary care, as well as in public health. \n Access to health care may vary across countries, communities, and individuals, largely influenced by social and economic conditions as well as health policies. Providing health care services means the timely use of personal health services to achieve the best possible health outcomes.[1] Factors to consider in terms of healthcare access include financial limitations (such as insurance coverage), geographic barriers (such as additional transportation costs, possibility to take paid time off of work to use such services), and personal limitations (lack of ability to communicate with healthcare providers, poor health literacy, low income).[2] Limitations to health care services affects negatively the use of medical services, efficacy of treatments, and overall outcome (well-being, mortality rates).';
  constructor() { }

  ngOnInit() {
  }

  allFalse(val) {
    for (let a of Object.keys(this.activeFields)) {
      this.activeFields[a] = false;
    }
    this.activeFields[val] = true;
  }
}
