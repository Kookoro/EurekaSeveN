import React from "react";
import { Button, Input } from "antd";
class LeetCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candies: [2, 3, 5, 1, 3],
      key: 3,
      result: [],
      value: 0,
    };
    this.kidsWithCandies = this.kidsWithCandies.bind(this);
  }
  kidsWithCandies(candies, extraCandies) {
    //leetcode  https://leetcode-cn.com/problems/qiu-12n-lcof/
    let result2 = [],
      status = false;
    for (let i = 0; i < candies.length; i++) {
      for (let j = 0; j < candies.length; j++) {
        if (candies[i] + extraCandies >= candies[j]) {
          status = true;
        } else {
          status = false;
          break;
        }
      }
      result2.push(status);
    }
    this.setState({
      result: result2,
    });
  }
  accumulation(n) {
    return n && n + this.accumulation(--n); //累加算法
  }
  render() {
    return (
      <div>
        <h1>leetcode</h1>
        <Button
          onClick={() => {
            this.kidsWithCandies(this.state.candies, this.state.key);
          }}
        >
          点击
        </Button>
        <h2>1{this.state.result.toString()}</h2>
        <div>
          <a href="https://leetcode-cn.com/problems/qiu-12n-lcof/">累加算法</a>

          <Input
            autoComplete="off"
            placeholder="input a number"
            name="aid"
            onChange={(e) => {
              const value = e.target.value;
              this.setState({
                value: this.accumulation(parseFloat(value))
                  ? this.accumulation(parseFloat(value))
                  : 0,
              });
            }}
          ></Input>
          <h1>
            {" "}
            <span>result:{this.state.value}</span>
          </h1>
        </div>
      </div>
    );
  }
}
export default LeetCode;
