import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import {Link} from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import firebase from "../../components/Firebase/firebase.js"
import Chip from '@material-ui/core/Chip';
import "./AddPage.css";

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
            Title: "",
            Description: "",
            ImageUrl: "",
            Categories: [],

            TitleError: false,
            DescriptionError: false,
            ImageUrlError: false,
            CategoryError: false,

            TitleErrorText: "",
            DescriptionErrorText: "",
            ImageUrlErrorText: "",
            CategoryErrorText: ""
        };
        this.ref = firebase.firestore().collection('activities');
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
        let cats = this.state.Categories;
        if (!cats.includes(event.target.value)) {
            cats.push(event.target.value);
            this.setState({
                Categories: cats
            });
        }
    };

    handleSubmitButton = () => {
        let good = true;
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
        if (good === true) {
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
                this.props.history.push("/")
            })
                .catch((error) => {
                    console.error("Error adding entry: ", error);
                });
        }
    };

    removeCat = (category) => {
        let cat = this.state.Categories;
        cat.splice(category, 1);
        this.setState({
            Categories: cat
        });
    };

    render() {
        let categoryList = [];
        console.log(this.state.Categories.length);
        for (let i =  0; i < this.state.Categories.length; i++) {
            categoryList.push(
                <Chip
                  label={this.state.Categories[i]}
                  className={"chip"}
                  onDelete={() => {this.removeCat(i)}}
                />
            )
        }
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
                <Button variant="contained" id="addButtons" onClick={this.handleSubmitButton}>Submit</Button>
                <Link to="/">
                    <Button variant="contained" color="primary">Back</Button>
                </Link>
            </div>
          </ StylesProvider>
        )
    }


}

export default AddPage;
