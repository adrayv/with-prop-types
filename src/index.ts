export default function (propTypes: object = {}, defaultProps: object= {}) {
  return (component: any) => {
    const c = component;
    c.propTypes = propTypes;
    c.defaultProps = defaultProps;
    return c;
  };
};