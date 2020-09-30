import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getleads, deletelead } from "../../actions/leads";
import leads from "../../reducers/leads";

export class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getleads();
  }

  render() {
    return (
      <Fragment>
        <h2>Leads</h2>
        <table className="tavble table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Remarks</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td>
                  <button
                    onClick={this.props.deletelead.bind(this, lead.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  leads: state.leads.leads,
});

export default connect(mapStateToProps, { getleads, deletelead })(Leads);
