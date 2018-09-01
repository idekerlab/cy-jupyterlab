import React from 'react';
//import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
//import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {status} from '../render_root'

const styles = (theme:any) => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
/*  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },*/
});

export class SimpleSelect extends React.Component {
  state = {
    layout: '',
    name: 'hai',
  };

  handleChange = (event:any) => {
  const layout = status.layout({ name: event.target.value });
  layout.run();
  };

  render() {

    return (
      <div>
          <h3>select layouts</h3>
          <InputLabel htmlFor="layout-simple">Layouts</InputLabel>
          <Select
            value={'layputs'}
            displayEmpty
            onChange={this.handleChange}
            inputProps={{
              name: 'layouts',
              id: 'layout-simple',
            }}
          >
            <MenuItem value="">
              <em>Placeholder</em>
            </MenuItem>
            <MenuItem value={'random'}>random</MenuItem>
            <MenuItem value={'grid'}>grid</MenuItem>
            <MenuItem value={'circle'}>circle</MenuItem>
            <MenuItem value={'concentric'}>concentric</MenuItem>
            <MenuItem value={'breadthfirst'}>breadthfirst</MenuItem>
            <MenuItem value={'cose'}>cose</MenuItem>
          </Select> 
          <FormHelperText>Required</FormHelperText>
      </div>
    );
  }
}
/*
SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};*/

export default withStyles(styles)(SimpleSelect);