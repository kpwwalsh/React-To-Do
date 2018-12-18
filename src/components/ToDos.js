      class ToDo extends React.Component {
        render(){
          return (
           <li>
          <input
            type="checkbox"
            checked= { this.props.isCompleted }
            onChange= { this.props.toggleComplete }
            />
            <span> {this.props.description}</span>
            <button onClick={this.props.handleDelete}> Delete</button>
          );
         }
      }

ReactDOM.render(<App/>, document.getElementById('app'));
