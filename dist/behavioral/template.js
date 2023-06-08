class CreateReport {
    templateReport() {
        this.design();
        this.title();
        this.watermark();
        this.text();
        this.conclusion();
    }
    design() {
        this.font = 'Times New Roman';
        this.font_size = 14;
    }
    watermark() {
    }
}
class DiplomaReport extends CreateReport {
    title() {
        console.log('>>> Title Diploma');
    }
    watermark() {
        console.log('>>> vlas1d');
    }
    text() {
        console.log(`>>> Text 1: font: ${this.font}, ${this.font_size}px;`);
    }
    conclusion() {
        console.log('>>> Conclusion Diploma');
    }
}
class CourseReport extends CreateReport {
    title() {
        console.log('>>> Title Course');
    }
    text() {
        console.log(`>>> Text 2: font: ${this.font}, ${this.font_size}px;`);
    }
    conclusion() {
        console.log('>>> Conclusion Course');
    }
}
class PracticalReport extends CreateReport {
    title() {
        console.log('>>> Title Practical');
    }
    text() {
        console.log(`>>> Text 3: font: ${this.font}, ${this.font_size}px;`);
    }
    conclusion() {
        console.log('>>> Conclusion Practical');
    }
}
const practical_report = new PracticalReport();
const diploma_report = new DiplomaReport();
const course_report = new CourseReport();
console.log('Practical_________________________________________');
practical_report.templateReport();
console.log('Course_________________________________________');
course_report.templateReport();
console.log('Diploma_________________________________________');
diploma_report.templateReport();
//# sourceMappingURL=template.js.map