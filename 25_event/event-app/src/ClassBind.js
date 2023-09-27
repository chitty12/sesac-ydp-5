import { Component } from 'react';

class ClassBind extends Component {
  constructor(props) {
    super(props);
    console.log('constructor this:', this);
    // 1. 클래스 컴포넌트에서 이벤트 사용하는 방법 - bind 쓰기
    // - js 에서는 this를 호출하는 방법에 의해 결정 => 함수가 호출될 때마다 this가 다를 수 있다.
    // bind() 메서드는 호출되는 방법과 무관하게 this를 묶어버림.
    // this.printConsole = this.printConsole.bind(this);
  }

  //   1) bind 사용하는 경우
  //   printConsole() {
  //     console.log(`this`, this);
  //   }

  // 2. 클래스 컴포넌트에서 이벤트사용하는 방법 - 화살표 함수 사용
  //   화살표 함수는 this가 아에 없어서 선언될 시점에 상위 스코프가 this로 바인딩.
  printConsole = () => {
    console.log(`this`, this);
  };

  printConsole2 = (msg) => {
    console.log('메세지', msg);
  };

  render() {
    return (
      <div>
        <h1>class bind</h1>
        <button onClick={this.printConsole}>
          printConsole(인자가 없는 경우)
        </button>
        <button onClick={() => this.printConsole2('msg')}>
          printConsole(인자가 있는 경우)
        </button>
        <button onClick={this.printConsole2.bind(null, 'msg')}>
          printConsole(인자가 있는 경우, bind)
        </button>
      </div>
    );
  }
}

export default ClassBind;
