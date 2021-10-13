import { FormInstance } from 'antd/lib/form';
import { NextRouter } from "next/router";

export const checkIfInvalid = (form: FormInstance, filter?: Array<string>) => {
  let invalid = false;
  form.getFieldsError().some(f => {
    const name = f.name[0].toString();
    if (name !== 'id') {
      if (!filter || filter.length === 0 || filter.indexOf(name) < 0) {
        const val = form.getFieldValue(name);
        if (!form.isFieldTouched(name) && (!val || val.length === 0)) {
          invalid = true;
          return true;
        }
      }
    }
  });
  return invalid;
};

export const goToOrganization = (router: NextRouter, id?: number | string | string[]) => {
  const query = router.query;
  delete query.unit;
  return router.push({
    pathname: '/create-organization',
    query: id ? {...query, ...{ org: id }} : query
  }, undefined, { shallow: true })
};

export const goToDiagram = (router: NextRouter, id?: number | string | string[]) => {
  const query = router.query;
  delete query.unit;
  return router.push({
    pathname: '/organization-details',
    query: id ? {...query, ...{ org: id }} : query
  }, undefined, { shallow: true })
};

export const goToSuccessUnits = (router: NextRouter, id?: number | string | string[]) => {
  return router.push({
    pathname: '/success-units',
    query: id ? {...router.query, ...{ org: id }} : router.query
  }, undefined, { shallow: true })
};

export const goToSelectPlan = (router: NextRouter, id?: number | string | string[]) => {
  return router.push({
    pathname: '/select-your-plan',
    query: id ? {...router.query, ...{ org: id }} : router.query
  }, undefined, { shallow: true })
};

export const goToUnit = (router: NextRouter, id?: number | string | string[]) => {
  const query = router.query;
  delete query.unit;
  return router.push({
    pathname: '/add-success-unit',
    query: id ? {...query, ...{ unit: id }} : query
  }, undefined, { shallow: true })
};