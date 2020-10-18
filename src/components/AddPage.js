import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from '@material-ui/core/Button';

let categories = [
    {
        value: "Cat1",
        label: "Category1"
    },
    {
        value: "Cat2",
        label: "Category2"
    }
];

class AddPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Title: "",
            Description: "",
            ImageUrl: "",
            Category: "",

            TitleError: false,
            DescriptionError: false,
            ImageUrlError: false,
            CategoryError: false
        }
    }

    handleTitleChange = (event) => {
        this.setState({
            Title: event.target.value
        })
    };

    handleDescriptionChange = (event) => {
        this.setState({
            Description: event.target.value
        })
    };

    handleImageChange = (event) => {
        this.setState({
            ImageUrl: event.target.value
        })
    };

    handleCategoryChange = (event) => {
        this.setState({
            Category: event.target.value
        })
    };

    handleSubmitButton = () => {
        let good = true;
        if (this.state.Title === "") {
            this.setState({
                TitleError: true
            })
            good = false;
        }
        if (this.state.Description === "") {
            this.setState({
                DescriptionError: true
            });
            good = false;
        }
        if (this.state.ImageUrl === "") {
            this.setState({
                ImageUrlError: true
            });
            good = false;
        }
        if (this.state.Category === "") {
            this.setState({
                CategoryError: true
            });
            good = false;
        }
        if (good === true) {
            //submit form to backend
        }
    };

    handleBackButton = () => {
        
    };

    //Title
    //Image
    //Description
    //Drop down categories
    render() {
        return (
            <div>
                <form className={'search'} noValidate autoComplete="off">
                    <TextField id="Title"
                               label="Title"
                               variant="outlined"
                               fullWidth
                               margin={"normal"}
                               value={this.state.Title}
                               error={this.state.TitleError}
                               helperText={"Must enter title"}
                               onChange={this.handleTitleChange}
                    />
                    <TextField id="Description"
                               label="Description"
                               variant="outlined"
                               fullWidth
                               margin={"normal"}
                               value={this.state.Description}
                               error={this.state.DescriptionError}
                               helperText={"Must enter description"}
                               onChange={this.handleDescriptionChange}
                    />
                    <TextField id="image"
                               label="Image Url"
                               variant="outlined"
                               fullWidth
                               margin={"normal"}
                               value={this.state.ImageUrl}
                               error={this.state.ImageUrlError}
                               helperText={"Must enter image url"}
                               onChange={this.handleImageChange}
                    />
                    <TextField id="categories" xzaq
                               label="Select Category"
                               variant="outlined"
                               fullWidth
                               select
                               margin={"normal"}
                               value={this.state.Category}
                               error={this.state.CategoryError}
                               helperText={"Must choose category"}
                               onChange={this.handleCategoryChange}
                    >
                        {categories.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                </form>
                <Button variant="contained" onClick={this.handleSubmitButton}>Submit</Button>
                <Button variant="contained" color="secondary">Back</Button>
            </div>
        )
    }


}

export default AddPage;