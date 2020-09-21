const projectName = "markdown-previewer";
localStorage.setItem('example_project', 'Markdown Previewer');

marked.setOptions({
    breaks: true,
});

const renderer = new marked.Renderer();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: this.props.markdown
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        e.preventDefault()
        this.setState({
            markdown: e.target.value
        });
    }

    render() {
        return (
            <div className={"row"}>
                <div className="split-pane col-xs-12 col-sm-6 uiux-side">
                    <div className="crt-bezel">
                        <div className="crt">
                            <div className={"menu"}>
                                <p>| 13:37 | +-------+ Running...</p>
                            </div>
                            <textarea
                                className="crt-scan-area"
                                type="text"
                                value={this.state.markdown}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="split-pane col-xs-12 col-sm-6 frontend-side">
                    <div className="markdownRender">
                        <div dangerouslySetInnerHTML={{ __html: marked(this.state.markdown, { renderer: renderer }) }} />
                    </div>
                </div>
            </div>
        );
    }
}

let markdown = `
### Markdown Editor

This project was really fun, working with react/markdown FTW.

## Installation

Use the editor on the other side and see the changes take place here.

\`\`\`bash
User Markdown
\`\`\`

## Usage

\`\`\`python
# User arrow keys to go up or down in the editor.
import Beer

Beer.drink(\'&pizza\') # returns \'goodTimes\'
\`\`\`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

    _________ _________ _________ _________ _________ _________ 
    (___   _  |____  _  |______  _|  _____  |___   ___|  _____  )
        | |_| |___| |_| |_____/ /_| |     | |___| |___| |_____| |
        (_____|_________|_________|_)     (_|_________|_________)

                 +------------+ +---------------------------+
                 |            | |                           |
                 |            | |         Web App           |
                 |            | |                           |
                 |            | +--------------+------------+
                 |  Homepage  |                |             
                 |            | +--------------v------------+
    +------------+            | |                           |
    |            |            | |      Webservice API       |
    |  +--------->            | |                           |
    |  |         +------+-----+ +--------------+------------+
    |  |                |                      |             
    |  |         +------v----------------------v------------+
    |  |         |                                          |
    |  |         |                 Domain                   |
    |  |         |                                          |
    |  |         +---------+----^------------+----^---------+
    |  |                   |    |            |    |          
    |  |              +----v----+----+  +----v----+----+     
    |  |              |              |  |              |     
    |  +--------------+              |  |              |     
    |                 |  File Store  |  |   Database   |     
    +----------------->              |  |              |     
                      |              |  |              |     
                      +--------------+  +--------------+     

`
ReactDOM.render(<App markdown={markdown} />, document.getElementById('app'));
