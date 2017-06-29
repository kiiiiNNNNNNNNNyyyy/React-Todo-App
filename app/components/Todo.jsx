var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    render: function(){

        var {id, text, completed, createdAt} = this.props; 
        var renderDate = () => {
            var message = 'Created ';
            var timeStamp = createdAt;
        
            return message + moment.unix(timeStamp).format('MMM Do YYYY @ h:mm a');
        }

        return(
            <div onClick={() => {
                this.props.onToggle(id);
            }}>
                <input type="checkbox" checked={completed} />
                <p>{text}</p>    
                <p>{ renderDate()}</p>
            </div>
        );
    }
});

module.exports = Todo;