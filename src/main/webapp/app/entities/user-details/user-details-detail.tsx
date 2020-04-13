import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './user-details.reducer';
import { IUserDetails } from 'app/shared/model/user-details.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IUserDetailsDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const UserDetailsDetail = (props: IUserDetailsDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { userDetailsEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          UserDetails [<b>{userDetailsEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="mobileNumber">Mobile Number</span>
          </dt>
          <dd>{userDetailsEntity.mobileNumber}</dd>
          <dt>
            <span id="dateOfBirth">Date Of Birth</span>
          </dt>
          <dd>
            <TextFormat value={userDetailsEntity.dateOfBirth} type="date" format={APP_LOCAL_DATE_FORMAT} />
          </dd>
          <dt>One To One</dt>
          <dd>{userDetailsEntity.oneToOne ? userDetailsEntity.oneToOne.login : ''}</dd>
        </dl>
        <Button tag={Link} to="/user-details" replace color="info">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/user-details/${userDetailsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ userDetails }: IRootState) => ({
  userDetailsEntity: userDetails.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailsDetail);
