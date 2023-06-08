abstract class CreateReport {
    protected font: string;
    protected font_size: number;

    templateReport(): void {
        this.design();
        this.title();
        this.watermark();
        this.text();
        this.conclusion();
    }

    abstract title(): void;
    abstract text(): void;
    abstract conclusion(): void;

    design(): void {
        this.font = 'Times New Roman';
        this.font_size = 14;
    }

    watermark(): void {

    }
}

//--------------------SPECIFIC_CLASS-------------------------------------

class DiplomaReport extends CreateReport {
    title(): void {
        console.log('>>> Title Diploma');
    }
    watermark(): void {
        console.log('>>> vlas1d');
    }
    text(): void {
        console.log(`>>> Text 1: font: ${this.font}, ${this.font_size}px;`);
    }
    conclusion(): void {
        console.log('>>> Conclusion Diploma');
    }
}

class CourseReport extends CreateReport {
    title(): void {
        console.log('>>> Title Course');
    }
    text(): void {
        console.log(`>>> Text 2: font: ${this.font}, ${this.font_size}px;`);
    }
    conclusion(): void {
        console.log('>>> Conclusion Course');
    }
}

class PracticalReport extends CreateReport {
    title(): void {
        console.log('>>> Title Practical');
    }
    text(): void {
        console.log(`>>> Text 3: font: ${this.font}, ${this.font_size}px;`);
    }
    conclusion(): void {
        console.log('>>> Conclusion Practical');
    }
}

//----------------------CLIENT-------------------------------------------

const practical_report = new PracticalReport();
const diploma_report = new DiplomaReport();
const course_report = new CourseReport();

console.log('Practical_________________________________________');
practical_report.templateReport();
console.log('Course_________________________________________');
course_report.templateReport();
console.log('Diploma_________________________________________');
diploma_report.templateReport();