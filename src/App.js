import React, { Component } from "react";
import DatePicker from "material-ui/DatePicker";
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: null,
      selectedDate2: null,
      isSecondDateClicked: false,
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDateChangeSecond = this.handleDateChangeSecond.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleDateChange(event, date) {
    this.setState({ selectedDate: date });
    this.setState({ selectedDate2: date });
  }

  handleDateChangeSecond(event, date) {
    this.setState({ selectedDate2: date });
  }

  handleClick() {
    this.setState({ isSecondDateClicked: true });
  }

  render() {
    return (
      <div className="App">
        <p>First DatePicker:</p>
        <DatePicker
          hintText="Select Date"
          value={this.state.selectedDate}
          onChange={this.handleDateChange}
        />
        <p>Second DatePicker:</p>
        <DatePicker
          hintText="Select Date"
          onChange={this.handleDateChangeSecond}
          onClick={this.handleClick}
          value={
            this.state.isSecondDateClicked ? this.state.selectedDate2 : null
          }
        />
      </div>
    );
  }
}

export default App;
