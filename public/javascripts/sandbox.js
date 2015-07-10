(function (React) {
    'use strict';

    var BUTTONS = [
        {on: 'Liked', off: 'Like'},
        {on: 'Clicked', off: 'Unclicked'},
        {on: 'Yes', off: 'No'}
    ];

    var LikeButton = React.createClass({
        getButton: function () {
            return this.props.button;
        },

        getInitialState: function () {
            return {
                liked: true
            };
        },

        handleClick: function () {
            this.setState({ liked: !this.state.liked });
        },

        getButtonText: function () {
            return this.state.liked ? this.getButton().on : this.getButton().off;
        },

        render: function () {
            return (
                <button name="like" onClick={this.handleClick}>
                    {this.getButtonText()}
                </button>
            );
        }
    });


    var LikeButtonCollection = React.createClass({
        getButtons: function () {
            return this.props.buttons;
        },

        createButton: function (button, index) {
            return (<li key={index}><LikeButton button={button} /></li>);
        },

        createButtons: function () {
            return this.getButtons().map(this.createButton);
        },

        render: function () {
            return (
                <ul>{this.createButtons()}</ul>
            );
        }
    });

    React.render(
        <LikeButtonCollection buttons={BUTTONS} />,
        document.getElementById('example')
    );
}(React));
