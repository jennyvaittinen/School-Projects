class Nappi extends React.Component {
    state = { laskuri: 0}
    //funktio joka tekee muutoksen
    handleClick1 = () => {
      this.setState({
        laskuri: this.state.laskuri + 1
      })
    }
      //funktio joka tekee muutoksen
    handleClick2 = () => {
      this.setState({
        laskuri: this.state.laskuri - 1
      })
    }
    render(){
      return (
        <div>
        <button onClick={this.handleClick1}>+</button>
        <span>{this.state.laskuri}</span>
        <button onClick={this.handleClick2}>-</button>
      </div>
      )
    }
  }
  const paikka = document.querySelector("#content")
  ReactDOM.render(<Nappi />, paikka)