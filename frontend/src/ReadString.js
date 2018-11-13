import React from "react";

class ReadString extends React.Component {
  state = { dataKey: null };

  componentDidMount() {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.MyStringStore;

    console.log(drizzle);
    console.log(drizzleState);

    // let drizzle know we want to watch teh 'myString' method
    const dataKey = contract.methods['myString'].cacheCall();

    this.setState({ dataKey });
  }

  render() {
    // get the contract state from drizzleState
    const { MyStringStore } = this.props.drizzleState.contracts;

    // using the saved 'dataKey', get the variable we're interested in
    const myString = MyStringStore.myString[this.state.dataKey];

    // if it exists, then we display its value
    return <p>My Stored string: {myString && myString.value}</p>;
  }
}

export default ReadString;
