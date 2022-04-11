import React from "react";
import {render} from "@testing-library/react";
import Profile from "./Profile";

const {getByText, getByLabelText, getByPlaceholderText} = render(<Profile username='velopert' name='김민준'/>)
