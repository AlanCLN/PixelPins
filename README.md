# Pixel Pins
### [Check it out!](https://pixel-pins.herokuapp.com/#/)

## Brief Overview
Pixel Pins is a [Pinterest](https://www.pinterest.com/) clone that allows a logged in user to be inspired by ideas that other people create/post through the form of a 'pin'. A pin contains an image, title, and description. Any user can create a pin and save other people's pins to their profile. They can also create boards that act as 'folders' to categorize their saved pins.

## Technologies Used

- Javascript
- React
- Redux
- Ruby
- Ruby on Rails
- PostgreSQL
- Webpack
- AWS S3
- Heroku

## Previews

### Splash Page

![](./app/assets/images/splash-page-gif.gif)

### Home Page

![](./app/assets/images/home-page-gif.gif)

### Create a Pin

![](./app/assets/images/create-pin-gif.gif)

### Organize Your Pins

![](./app/assets/images/create-board-gif.gif)

## Code Snippets

Below is a code snippet of when we want to save a pin to our profile. We are simply creating an entry in a relational database with the user ID and the pin ID. When we want to un-save that pin, we simply destroy that entry in our database.

```ruby
    def create
        @pin = Pin.find_by(id: params[:pin_id])
        @user = current_user
        if @pin && @user.save_pin(@pin)
            render "api/users/show"
        else
            render json: ["Something went wrong"], status: 422
        end
    end

    def destroy
        @pin = Pin.find_by(id: params[:id])
        @user = current_user
        @spr = @user.savedpin_relationships.find_by(pin_id: @pin.id)

        if @pin && @spr
            @spr.destroy
            render "api/users/show"
        else
            render json: ["Something went wrong"], status: 422
        end
    end
```

Below is a code snippet of the Create a Board form. It uses two hooks - useState and useDispatch. The hook, useState, is used to allow a user to view any input changes when they type in their title or description. And the hook, useDispatch, is used when we want to dispatch the board object to our redux state manager after creating the board in the backend with the user's inputs.

```javascript
const BoardForm = (props) => {

    const [state, setState] = useState({
        name: '',
        description: ''
    })
    const dispatch = useDispatch();

    const handleNameChange = (e) => {
        setState({...state, name: e.target.value})
    }

    const handleBoardSubmit = (e) => {
        e.preventDefault();

        createBoard(state).then(board => {
            dispatch(receiveBoard(board));
            props.closeModal();
            props.history.push(`/boards/${board.id}`)
        }, err => {
            dispatch(receiveBoardErrors(err.responseJSON))
        })
    }

    return (
        <div className="board-modal-container">
            <h1>Create Board</h1>
            <div className="board-modal-form-container">
                <form className="board-modal-form">
                    <label htmlFor="board-name">Name</label>
                    <input
                        id="board-name"
                        type="text"
                        value={state.name}
                        onChange={handleNameChange}
                        placeholder='Like "Places to Go" or "Recipes to Make"'
                    />
                    {
                        props.errors.map(error => {
                            return (
                                <p>{error}</p>
                            )
                        })
                    }
                    <div className="board-submit-button-container">
                        <button onClick={handleBoardSubmit}>Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mSTP = (state) => {
    return {
        errors: state.errors.boards
    }
}

const mDTP = (dispatch) => {
    return {
        createBoard: board => dispatch(createBoard(board)),
        closeModal: () => dispatch(closeModal())
    }
}

export default withRouter(connect(mSTP, mDTP)(BoardForm));
```
