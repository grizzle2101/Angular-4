import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        {{ text | summary:10 }}
    `
})
export class CoursesComponent {
    text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`
}