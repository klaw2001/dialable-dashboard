/*!

=========================================================
* Now UI Dashboard React - v1.5.2
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect } from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import { thead, tbody } from "variables/general";
import { useApi } from "context/MyContext";
import Loader from "components/Loader";

function RegularTables() {
  const { getAllUsers, users , loading} = useApi();
  useEffect(() => {
    getAllUsers();
  }, []);

  console.log(users);
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Users List</CardTitle>
              </CardHeader>
              {loading ? (
                <Loader/>
              ):(

              <CardBody>

                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      {thead.map((prop, key) => {
                        if (key === thead.length - 1)
                          return (
                            <th key={key} className="text-center">
                              {prop}
                            </th>
                          );
                        return (
                          <th key={key} className="text-center">
                            {prop}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {/* {tbody.map((prop, key) => {
                      return (
                        <tr key={key}>
                          {prop.data.map((prop, key) => {
                            if (key === thead.length - 1)
                              return (
                                <td key={key} className="text-right">
                                  {prop}
                                </td>
                              );
                            return <td key={key}>{prop}</td>;
                          })}
                        </tr>
                      );
                    })} */}
                    {users.map((elem, ind) => (
                      <tr key={ind}>
                        <td className="text-center">
                          {elem.firstName} {elem.lastName}
                        </td>
                        <td className="text-center">{elem.email}</td>
                        <td className="text-center">{elem.role}</td>
                        <td className="text-center">
                          {elem.isEmailVerified === false ? "False" : "True"}
                        </td>
                        <td className="text-center">
                          {new Intl.DateTimeFormat("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            hour12: false,
                            timeZone: "UTC",
                          }).format(new Date(elem.createdAt))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
              )}
            </Card>
          </Col>
          {/* <Col xs={12}>
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">Table on Plain Background</CardTitle>
                <p className="category"> Here is a subtitle for this table</p>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      {thead.map((prop, key) => {
                        if (key === thead.length - 1)
                          return (
                            <th key={key} className="text-right">
                              {prop}
                            </th>
                          );
                        return <th key={key}>{prop}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {tbody.map((prop, key) => {
                      return (
                        <tr key={key}>
                          {prop.data.map((prop, key) => {
                            if (key === thead.length - 1)
                              return (
                                <td key={key} className="text-right">
                                  {prop}
                                </td>
                              );
                            return <td key={key}>{prop}</td>;
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col> */}
        </Row>
      </div>
    </>
  );
}

export default RegularTables;
