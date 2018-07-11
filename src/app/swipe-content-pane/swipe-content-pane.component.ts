import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swipe-content-pane',
  templateUrl: './swipe-content-pane.component.html',
  styleUrls: ['./swipe-content-pane.component.css']
})
export class SwipeContentPaneComponent implements OnInit {

  public scrollContentList: Array<Object> = [
      {id: 1, content: '“The initial consultancy session gave me the clarity I needed to make some changes to my business.  ' +
        'These few changes more than covered the consultancy fee but I always say the proof is in the pudding, which was amply ' +
        'demonstrated. In addition to making changes within the business, Sue also inspired me to move my personal qualifications ' +
        'forward & I achieved Chartered status within 2 ½ years of our initial consultation, which over the last 6 years has brought ' +
        'further tangible benefit to the business & a great deal of personal satisfaction’.  \n' +
        'Mark Curtis – Perry Appleton\n'
      },
      {id: 2, content: '“Susan is a lovely person and an excellent listener who can see through to the core of an issue. She is very ' +
        'supportive and generous of spirit, and gently, but firmly, guides in the right direction. She is knowledgeable and talented ' +
        'and I would wholeheartedly recommend her services”.  \n' +
        'Julie Williams – Home Instead, Dudley \n'},
      {id: 3, content: '“Susan is a supportive and talented coach who I wholeheartedly recommend. She has that rare combination ' +
        'of an extremely high EQ alongside a breadth of experience, training and insight that, combined, leads to great results ' +
        'for individuals and teams. Susan has a repertoire of effective styles, from supportive to directive, and is great ' +
        'working one-to-one and in seminars. I\'m am sure Susan will enable many teams and entrepreneurs to \'fly\' with ' +
        'her pragmatic, proven and well-timed approach”. \n' +
        'John Moore – Steadfast Care Ltd, Bristol North\n'},
      {id: 4, content: '“I have worked with Sue as our Business Coach since we bought the business a year ago. Through ' +
        'this period of massive learning, she has been a huge support. Sue is able to give just the right level of ' +
        'advice for a situation without overloading. She always responds quickly with excellent advice, every time. ' +
        'If you are looking for calm, knowledgeable, and practical support as you grow your business, look no further”.  \n' +
        'Mike Keig - Home Instead, Weston Super Mare\n'},
    ];

  constructor() { }

  ngOnInit() {
  }

  onLeftClick() {
    return this.getText(false);
  }

  onRightClick() {
    return this.getText(true);
  }

  private getText(direction) {
    if (direction) {
      this.scrollContentList
      return this.scrollContentList[this.scrollContentList.indexOf(direction)];
    } else {
      return this.scrollContentList[this.scrollContentList.indexOf(direction)];
    }
  }
}
