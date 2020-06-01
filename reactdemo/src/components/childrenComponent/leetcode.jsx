import React from "react";
import { Button } from "antd";
class LeetCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candies: [2, 3, 5, 1, 3],
      key: 3,
      result: [],
    };
    this.kidsWithCandies = this.kidsWithCandies.bind(this);
  }
  kidsWithCandies(candies, extraCandies) {
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
      </div>
    );
  }
}
export default LeetCode;
