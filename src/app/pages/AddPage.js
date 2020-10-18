import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import {Link} from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import firebase from "../../components/Firebase/firebase.js"
import "./AddPage.css";

// Lists all the categories to select from
let categories = [
    {
        value: "Hiking"
    },
    {
        value: "Crafts"
    },
    {
        value: "Sports"
    },
    {
        value: "Outdoors"
    },
    {
        value: "Social distance"
    },
    {
        value: "Gaming"
    },
    {
        value: "Cooking"
    },
    {
        value: "Learning"
    },
    {
        value: "Reading"
    },
    {
        value: "Movies"
    }

];


class AddPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            // The data from inside the forms
            Title: "",
            Description: "",
            ImageUrl: "",
            Categories: [],

            // Keeps track of which forms are invalid
            TitleError: false,
            DescriptionError: false,
            ImageUrlError: false,
            CategoryError: false,

            // Error text to be displayed when from is invalid
            TitleErrorText: "",
            DescriptionErrorText: "",
            ImageUrlErrorText: "",
            CategoryErrorText: ""
        };
        this.ref = firebase.firestore().collection('activities');
    }

    // Runs when title text box is updated
    handleTitleChange = (event) => {
        this.setState({
            Title: event.target.value
        })
    };

    // Runs when description textbox is updated
    handleDescriptionChange = (event) => {
        this.setState({
            Description: event.target.value
        })
    };

    // Runs when the image url box is updated
    handleImageChange = (event) => {
        this.setState({
            ImageUrl: event.target.value
        })
    };

    // Runs when a category is selected
    handleCategoryChange = (event) => {
        let cats = this.state.Categories;
        if (!cats.includes(event.target.value)) {
            cats.push(event.target.value);
            this.setState({
                Categories: cats
            });
        }
    };

    // Runs when the submit button is pressed
    handleSubmitButton = () => {
        let good = true;

        // Makes sure all forms have some input
        if (this.state.Title === "") {
            this.setState({
                TitleError: true,
                TitleErrorText: "You must enter a title"
            });
            good = false;
        } else {
            this.setState({
                TitleError: false,
                TitleErrorText: ""
            });
        }
        if (this.state.Description === "") {
            this.setState({
                DescriptionError: true,
                DescriptionErrorText: "You must enter a description"
            });
            good = false;
        } else {
            this.setState({
                DescriptionError: false,
                DescriptionErrorText: ""
            })
        }
        if (this.state.ImageUrl === "") {
            this.setState({
                ImageUrlError: true,
                ImageUrlErrorText: "You must enter an image URL"
            });
            good = false;
        } else {
            this.setState({
                ImageUrlError: false,
                ImageUrlErrorText: ""
            })
        }
        if (this.state.Categories === []) {
            this.setState({
                CategoryError: true,
                CategoryErrorText: "You must select at least one category"
            });
            good = false;
        } else {
            this.setState({
                CategoryError: false,
                CategoryErrorText: ""
            })
        }
        const title = this.state.Title;
        const description = this.state.Description;
        const imageurl = this.state.ImageUrl;
        const categories = this.state.Categories;
        // Makes sure no form was invalid
        if (good === true) {
            // Sends data to database
            this.ref.add({
                title,
                description,
                imageurl,
                categories
            }).then(() => {
                this.setState({
                    Title: '',
                    Description: '',
                    ImageUrl: '',
                    Categories: []
                });
                // Returns to home page
                this.props.history.push("/")
            })
                .catch((error) => {
                    console.error("Error adding entry: ", error);
                });
        }
    };

    // Removes a category when the x is clicked
    removeCat = (category) => {
        let cat = this.state.Categories;
        cat.splice(category, 1);
        this.setState({
            Categories: cat
        });
    };

    render() {
        // Creates the categories chips when a category is selected
        let categoryList = [];
        for (let i =  0; i < this.state.Categories.length; i++) {
            categoryList.push(
                <Chip
                  label={this.state.Categories[i]}
                  className={"chip"}
                  onDelete={() => {this.removeCat(i)}}
                />
            )
        }
        //Each of the text forms
        return (
          <StylesProvider injectFirst>
            <div>
                <form id={'addForm'} className={'search'} noValidate autoComplete="off">
                    <TextField id="Title"
                               label="Title"
                               variant="outlined"
                               fullWidth
                               margin={"normal"}
                               value={this.state.Title}
                               error={this.state.TitleError}
                               helperText={this.state.TitleErrorText}
                               onChange={this.handleTitleChange}
                    />
                    <TextField id="Description"
                               label="Description"
                               variant="outlined"
                               fullWidth
                               margin={"normal"}
                               value={this.state.Description}
                               error={this.state.DescriptionError}
                               helperText={this.state.DescriptionErrorText}
                               onChange={this.handleDescriptionChange}
                    />
                    <TextField id="image"
                               label="Image Url"
                               variant="outlined"
                               fullWidth
                               margin={"normal"}
                               value={this.state.ImageUrl}
                               error={this.state.ImageUrlError}
                               helperText={this.state.ImageUrlErrorText}
                               onChange={this.handleImageChange}
                    />
                    {categoryList}
                    <TextField label="Add Category"
                               variant="outlined"
                               fullWidth
                               select
                               margin={"normal"}
                               value={"Add Category"}
                               error={this.state.CategoryError}
                               helperText={this.state.CategoryErrorText}
                               onChange={this.handleCategoryChange}
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </form>
                <Link to="/">
                    <Button id="addButtons" variant="contained">Back</Button>
                </Link>
                <Button variant="contained" id="addButtons"  color="primary" onClick={this.handleSubmitButton}>Submit</Button>
            </div>
          </ StylesProvider>
        )
    }


}

export default AddPage;
