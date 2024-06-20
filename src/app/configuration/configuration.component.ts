import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, NgZone, OnInit, inject } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { FormDataService } from '../form-data.service';
import { NgxGaugeType } from 'ngx-gauge/gauge/gauge';
 // Adjust the import path accordingly

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.css'
})
export class ConfigurationComponent {
  /*  
    rangeInput:any
    priceInput:any
    range:any
    priceGap:number=0
  
    
  
  
    ngAfterViewInit(): void {
      this.rangeInput= document.querySelectorAll(".range-input input")
    
      this.priceInput = document.querySelectorAll(".price-input input")
      this.range = document.querySelector(".slider .progress");
  
      this.priceGap =100;
  this.priceInput.forEach((input:any) => {
      input.addEventListener("input",(e:any) => {
        let minPrice = parseInt(this.priceInput[0].value),
          maxPrice = parseInt(this.priceInput[1].value);
  
        if ((maxPrice - minPrice >= this.priceGap) && maxPrice <= this.rangeInput[1].max) {
          if (e.target.className === "input-min") {
            this.rangeInput[0].value = minPrice;
            this.range.style.left = ((minPrice / this.rangeInput[0].max) * 100) + "%";
          } else {
            this.rangeInput[1].value = maxPrice;
            this.range.style.right = 100 - (maxPrice / this.rangeInput[1].max) * 100 + "%";
          }
        }
      });
  });
  this.rangeInput.forEach((input:any) => {
    input.addEventListener("input", (e:any) => {
      let minVal = parseInt(this.rangeInput[0].value),
        maxVal = parseInt(this.rangeInput[1].value);
      if ((maxVal - minVal) < this.priceGap) {
        if (e.target.className === "range-min") {
          this.rangeInput[0].value = maxVal - this.priceGap
        } else {
          this.rangeInput[1].value = minVal + this.priceGap;
        }
      } else {
        this.priceInput[0].value = minVal;
        this.priceInput[1].value = maxVal;
        this.range.style.left = ((minVal / this.rangeInput[0].max) * 100) + "%";
        this.range.style.right = 100 - (maxVal / this.rangeInput[1].max) * 100 + "%";
      }
    });
  });
  
    }
  */

  /*
    airTemperatureMin: number = 100;
    airTemperatureMax: number = 300;
  
  
    onFormSubmitted(form:NgForm){
      console.log(form.value)
      console.log(this.airTemperatureMin)
    }
   */
  /*
    airTemperatureMin: number = 100;
    airTemperatureMax: number = 300;
    progressLeft: number = 0;
    progressRight: number = 0;
    priceGap: number = 100;
  
    constructor(private cdr: ChangeDetectorRef) {}
  
    ngAfterViewInit(): void {
      this.updateProgress();
      this.cdr.detectChanges()
    }
  
    onFormSubmitted(form: NgForm) {
      console.log(form.value);
    }
  
    updateProgress(): void {
      const minVal = this.airTemperatureMin;
      const maxVal = this.airTemperatureMax;
      const maxRange = 500; // Assuming 500 is the max range value
  
      if ((maxVal - minVal) >= this.priceGap && maxVal <= maxRange) {
        this.progressLeft = (minVal / maxRange) * 100;
        this.progressRight = 100 - (maxVal / maxRange) * 100;
      }
    }*/
/*
  airTemperatureMin: number = 100;
  airTemperatureMax: number = 300;
  progressLeft: number = 0;
  progressRight: number = 0;
  readonly minGap: number = 100; // Minimum gap between min and max values

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.updateProgress();
    this.cdr.detectChanges(); // Explicitly trigger change detection
  }

  onFormSubmitted(form: NgForm) {
    console.log(form.value);
  }

  onMinInputChange(value: number) {
    this.airTemperatureMin = Number(value);
    if (this.airTemperatureMin >= this.airTemperatureMax - this.minGap) {
      this.airTemperatureMin = this.airTemperatureMax - this.minGap;
    }
    this.updateProgress();
  }

  onMaxInputChange(value: number) {
    this.airTemperatureMax = Number(value);
    if (this.airTemperatureMax <= this.airTemperatureMin + this.minGap) {
      this.airTemperatureMax = this.airTemperatureMin + this.minGap;
    }
    this.updateProgress();
  }

  onMinRangeChange(event: any) {
    let value = parseInt(event.target.value);
    if (value >= this.airTemperatureMax - this.minGap) {
      value = this.airTemperatureMax - this.minGap;
    }
    this.airTemperatureMin = value;
    this.updateProgress();
  }

  onMaxRangeChange(event: any) {
    let value = parseInt(event.target.value);
    if (value <= this.airTemperatureMin + this.minGap) {
      value = this.airTemperatureMin + this.minGap;
    }
    this.airTemperatureMax = value;
    this.updateProgress();
  }

  updateProgress(): void {
    const minVal = this.airTemperatureMin;
    const maxVal = this.airTemperatureMax;
    const maxRange = 500; // Assuming 500 is the max range value

    this.progressLeft = (minVal / maxRange) * 100;
    this.progressRight = 100 - (maxVal / maxRange) * 100;
  }

  */



  response: any
  // title = 'temperature-meter';
  airTempgaugeValue: number = 0;
  airTempgaugeLabel = "Air Temp";
  airTempgaugeAppendText = "K";
  // gaugeType = "semi";
  airTempgaugeType: NgxGaugeType = 'arch';
  airTempgaugeMinValue: number = 0; 
  airTempgaugeMaxValue: number = 500;
  airTempthresholdConfig = {
    '0': {color: 'green'},
    '100': {color: 'orange'},
    '250': {color: 'red'}
  };

  airTempmarkers={ "0": { color: "#555", type: "line", size: 10, label: "0", font: "12px arial" } ,
      "125":{color: "#555", type: "line", size: 10, label: "125", font: "12px arial"},

      "250": { color: "#555", type: "line", size: 10, label: "250", font: "12px arial" },

      "375": { color: "#555", type: "line", size: 10, label: "375", font: "12px arial" },

      "500":{color: "#555", type: "line", size: 10, label: "500", font: "12px arial"}

  }

  






  // title = 'temperature-meter';
  processTempgaugeValue: number = 0;
  processTempgaugeLabel = "Process Temp";
  processTempgaugeAppendText = "K";
  processTempgaugeType: NgxGaugeType = 'arch';
  processTempgaugeMinValue: number = 0; 
  processTempgaugeMaxValue: number = 500;
  processTempthresholdConfig = {
    '0': {color: 'green'},
    '100': {color: 'orange'},
    '250': {color: 'red'}
  };


  processTempmarkers={ "0": { color: "#555", type: "line", size: 10, label: "0", font: "12px arial" } ,
      "125":{color: "#555", type: "line", size: 10, label: "125", font: "12px arial"},

      "250": { color: "#555", type: "line", size: 10, label: "250", font: "12px arial" },

      "375": { color: "#555", type: "line", size: 10, label: "375", font: "12px arial" },

      "500":{color: "#555", type: "line", size: 10, label: "500", font: "12px arial"}

  }





  rotationalSpeedgaugeValue: number = 0;
  rotationalSpeedgaugeLabel = "Rotational Speed";
  rotationalSpeedgaugeAppendText = "Rpm";
  rotationalSpeedgaugeType: NgxGaugeType = 'arch';
  rotationalSpeedgaugeMinValue: number = 0; 
  rotationalSpeedgaugeMaxValue: number = 3000;
  rotationalSpeedthresholdConfig = {
    '0': {color: 'green'},
    '1150': {color: 'orange'},
    '2000': {color: 'red'}
  };


  rotationalSpeedmarkers={ "0": { color: "#555", type: "line", size: 10, label: "0", font: "12px arial" } ,
      "750":{color: "#555", type: "line", size: 10, label: "750", font: "12px arial"},

      "1500": { color: "#555", type: "line", size: 10, label: "1500", font: "12px arial" },

      "2250": { color: "#555", type: "line", size: 10, label: "2250", font: "12px arial" },

      "3000":{color: "#555", type: "line", size: 10, label: "3000", font: "12px arial"}

  }


  torquegaugeValue: number = 0;
  torquegaugeLabel = "Torque";
  torquegaugeAppendText = "Nm";
  torquegaugeType: NgxGaugeType = 'arch';
  torquegaugeMinValue: number = 0; 
  torquegaugeMaxValue: number = 100;
  torquethresholdConfig = {
    '0': {color: 'green'},
    '30': {color: 'orange'},
    '50': {color: 'red'}
  };


  torquemarkers={ "0": { color: "#555", type: "line", size: 10, label: "0", font: "12px arial" } ,
  "25":{color: "#555", type: "line", size: 10, label: "25", font: "12px arial"},

  "50": { color: "#555", type: "line", size: 10, label: "50", font: "12px arial" },

  "75": { color: "#555", type: "line", size: 10, label: "75", font: "12px arial" },

  "100":{color: "#555", type: "line", size: 10, label: "100", font: "12px arial"}

}


  toolWeargaugeValue: number = 0;
  toolWeargaugeLabel = "Tool wear";
  toolWeargaugeAppendText = "min";
  toolWeargaugeType: NgxGaugeType = 'arch';
  toolWeargaugeMinValue: number = 0; 
  toolWeargaugeMaxValue: number = 300;
  toolWearthresholdConfig = {
    '0': {color: 'green'},
    '60': {color: 'orange'},
    '100': {color: 'red'}
  };


  toolWearmarkers={ "0": { color: "#555", type: "line", size: 10, label: "0", font: "12px arial" } ,
  "75":{color: "#555", type: "line", size: 10, label: "75", font: "12px arial"},

  "150": { color: "#555", type: "line", size: 10, label: "150", font: "12px arial" },

  "225": { color: "#555", type: "line", size: 10, label: "225", font: "12px arial" },

  "300":{color: "#555", type: "line", size: 10, label: "300", font: "12px arial"}

}










  formData: any = {};

  defaultValues: any = {
    'air-temperature-min': 0,
    'air-temperature-max': 100,
    'process-temperature-min': 0,
    'process-temperature-max': 100,
    'rotational-speed-min': 0,
    'rotational-speed-max': 100,
    'torque-min': 0,
    'torque-max': 100,
    'toolwear-min': 0,
    'toolwear-max': 100
  };


  constructor(private formDataService: FormDataService,private zone: NgZone) {}

  ngOnInit() {
    // this.formData = this.formDataService.getFormData() || {};
    const savedFormData = this.formDataService.getFormData();
    this.formData = savedFormData ? savedFormData : { ...this.defaultValues };
  }

  
  // response: any

  getMaintenanceData() {
    const eventSource = new EventSource('http://localhost:5000/streamConfig');

    eventSource.onmessage = (event) => {
      this.zone.run(() => {
        console.log(event)
        this.response = JSON.parse(event.data);
        console.log(this.response['alerts']);
  
        if (this.response && this.response["Air temperature"]) {
          this.airTempgaugeValue = parseInt(this.response["Air temperature"]);
        }

        if(this.response && this.response["Process temperature"]){
          this.processTempgaugeValue=parseInt(this.response["Process temperature"])
        }

        if(this.response && this.response["Rotational speed"]){
          this.rotationalSpeedgaugeValue=parseInt(this.response["Rotational speed"])
        }

        if(this.response && this.response["Torque"]){
          this.torquegaugeValue=parseInt(this.response["Torque"])
        }

        if(this.response && this.response["Tool wear"]){
          this.toolWeargaugeValue=parseInt(this.response["Tool wear"])
        }



      });
    };

    eventSource.onerror = (error) => {
      console.error('EventSource failed:', error);
      eventSource.close();
    };
  }





  http:HttpClient=inject(HttpClient)
  onFormSubmitted(form: NgForm) {
    console.log(form.value);
    this.http.post("http://127.0.0.1:5000/config",form.value).subscribe((res:any)=>{
      console.log(res)
      
    })
    this.formDataService.setFormData(form.value);

    this.getMaintenanceData()
    

  }
}



