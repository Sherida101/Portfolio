import React, { Component } from "react";
import PropTypes from "prop-types";
import "./DegreeCard.css";

class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.innerRef = React.createRef();
    this.outerRef = React.createRef();

    // Bind class methods
    this.handleTriggerClick = this.handleTriggerClick.bind(this);
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
    this.continueOpenCollapsible = this.continueOpenCollapsible.bind(this);

    // Defaults the dropdown to be closed
    if (props.open) {
      this.state = {
        isClosed: false,
        shouldSwitchAutoOnNextCycle: false,
        height: "auto",
        transition: "none",
        hasBeenOpened: true,
        overflow: props.overflowWhenOpen,
        inTransition: false,
      };
    } else {
      this.state = {
        isClosed: true,
        shouldSwitchAutoOnNextCycle: false,
        height: 0,
        transition: `height ${props.transitionTime}ms ${props.easing}`,
        hasBeenOpened: false,
        overflow: "hidden",
        inTransition: false,
      };
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.shouldOpenOnNextCycle) {
      this.continueOpenCollapsible();
    }

    if (
      prevState.height === "auto" &&
      this.state.shouldSwitchAutoOnNextCycle === true
    ) {
      window.setTimeout(() => {
        // Set small timeout to ensure a true re-render
        this.setState({
          height: 0,
          overflow: "hidden",
          isClosed: true,
          shouldSwitchAutoOnNextCycle: false,
        });
      }, 50);
    }

    // If there has been a change in the open prop (controlled by accordion)
    if (prevProps.open !== this.props.open) {
      if (this.props.open === true) {
        this.openCollapsible();
        this.props.onOpening();
      } else {
        this.closeCollapsible();
        this.props.onClosing();
      }
    }
  }

  closeCollapsible() {
    this.setState({
      shouldSwitchAutoOnNextCycle: true,
      height: this.innerRef.current.offsetHeight,
      transition: `height ${
        this.props.transitionCloseTime
          ? this.props.transitionCloseTime
          : this.props.transitionTime
      }ms ${this.props.easing}`,
      inTransition: true,
    });
  }

  openCollapsible() {
    this.setState({
      inTransition: true,
      shouldOpenOnNextCycle: true,
    });
  }

  continueOpenCollapsible() {
    this.setState({
      height: this.innerRef.current.offsetHeight,
      transition: `height ${this.props.transitionTime}ms ${this.props.easing}`,
      isClosed: false,
      hasBeenOpened: true,
      inTransition: true,
      shouldOpenOnNextCycle: false,
    });
  }

  handleTriggerClick(event) {
    event.preventDefault();

    if (this.props.triggerDisabled) {
      return;
    }

    if (this.props.handleTriggerClick) {
      this.props.handleTriggerClick(this.props.accordionPosition);
    } else {
      if (this.state.isClosed === true) {
        this.openCollapsible();
        this.props.onOpening();
      } else {
        this.closeCollapsible();
        this.props.onClosing();
      }
    }
  }

  renderNonClickableTriggerElement() {
    if (
      this.props.triggerSibling &&
      typeof this.props.triggerSibling === "string"
    ) {
      return (
        <span className={`${this.props.classParentString}__trigger-sibling`}>
          {this.props.triggerSibling}
        </span>
      );
    } else if (this.props.triggerSibling) {
      return <this.props.triggerSibling />;
    }

    return null;
  }

  handleTransitionEnd() {
    // Switch to height auto to make the container responsive
    if (!this.state.isClosed) {
      this.setState({
        height: "auto",
        overflow: this.props.overflowWhenOpen,
        inTransition: false,
      });
      this.props.onOpen();
    } else {
      this.setState({ inTransition: false });
      this.props.onClose();
    }
  }

  render() {
    var dropdownStyle = {
      height: this.state.height,
      WebkitTransition: this.state.transition,
      msTransition: this.state.transition,
      transition: this.state.transition,
      overflow: this.state.overflow,
    };

    var openClass = this.state.isClosed ? "is-closed" : "is-open";
    var disabledClass = this.props.triggerDisabled ? "is-disabled" : "";

    //If user wants different text when tray is open
    var trigger =
      this.state.isClosed === false && this.props.triggerWhenOpen !== undefined
        ? this.props.triggerWhenOpen
        : this.props.trigger;

    // If user wants a trigger wrapping element different than 'span'
    const TriggerElement = this.props.triggerTagName;

    // Don't render children until the first opening of the Collapsible if lazy rendering is enabled
    var children =
      this.props.lazyRender &&
      !this.state.hasBeenOpened &&
      this.state.isClosed &&
      !this.state.inTransition
        ? null
        : this.props.children;

    // Construct CSS classes strings
    const triggerClassString = `${
      this.props.classParentString
    }__trigger ${openClass} ${disabledClass} ${
      this.state.isClosed
        ? this.props.triggerClassName
        : this.props.triggerOpenedClassName
    }`;
    const parentClassString = `${this.props.classParentString} ${
      this.state.isClosed ? this.props.className : this.props.openedClassName
    }`;
    const outerClassString = `${this.props.classParentString}__contentOuter ${this.props.contentOuterClassName}`;
    const innerClassString = `${this.props.classParentString}__contentInner ${this.props.contentInnerClassName}`;

    return (
      <div className={parentClassString.trim()}>
        <TriggerElement
          className={triggerClassString.trim()}
          onClick={this.handleTriggerClick}
          style={this.props.triggerStyle && this.props.triggerStyle}
          onKeyPress={(event) => {
            const { key } = event;
            if (key === " " || key === "Enter") {
              this.handleTriggerClick(event);
            }
          }}
          tabIndex={this.props.tabIndex && this.props.tabIndex}
        >
          <div className="body-header-duration">
            <h3
              className="duration"
              style={{ color: this.props.triggerElementProps.theme.text }}
            >
              {this.props.triggerElementProps.degree.duration}
            </h3>
          </div>
          <div className="body-header-title">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr" /*"repeat(2, 1fr)",*/,
                gridGap: 40,
              }}
            >
              <div>
                <h2
                  className="card-title"
                  style={{ color: this.props.triggerElementProps.theme.text }}
                >
                  {trigger}
                  {/* {this.props.triggerElementProps.degree.title} */}
                </h2>
                <h3
                  className="card-subtitle"
                  style={{ color: this.props.triggerElementProps.theme.text }}
                >
                  {this.props.triggerElementProps.degree.subtitle}
                </h3>
              </div>
            </div>
          </div>
        </TriggerElement>

        {this.renderNonClickableTriggerElement()}

        <div
          className={outerClassString.trim()}
          ref={this.outerRef}
          style={dropdownStyle}
          onTransitionEnd={this.handleTransitionEnd}
        >
          <div className={innerClassString.trim()} ref={this.innerRef}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

Collapsible.defaultProps = {
  transitionTime: 400,
  transitionCloseTime: null,
  triggerTagName: "span",
  easing: "linear",
  open: false,
  classParentString: "Collapsible",
  triggerDisabled: false,
  lazyRender: false,
  overflowWhenOpen: "hidden",
  openedClassName: "",
  triggerStyle: null,
  triggerClassName: "",
  triggerOpenedClassName: "",
  contentOuterClassName: "",
  contentInnerClassName: "",
  className: "",
  triggerSibling: null,
  onOpen: () => {},
  onClose: () => {},
  onOpening: () => {},
  onClosing: () => {},
  tabIndex: null,
};

Collapsible.propTypes = {
  open: PropTypes.bool,
  overflowWhenOpen: PropTypes.string,
  transitionTime: PropTypes.number,
  easing: PropTypes.string,
  onOpening: PropTypes.func,
  onClosing: PropTypes.func,
  transitionCloseTime: PropTypes.number,
  triggerDisabled: PropTypes.bool,
  handleTriggerClick: PropTypes.func,
  accordionPosition: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  triggerSibling: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.elementType,
  ]),
  classParentString: PropTypes.string,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  triggerWhenOpen: PropTypes.node,
  trigger: PropTypes.node,
  triggerTagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.elementType,
  ]),
  triggerClassName: PropTypes.string,
  triggerOpenedClassName: PropTypes.string,
  triggerStyle: PropTypes.object,
  openedClassName: PropTypes.string,
  className: PropTypes.string,
  contentOuterClassName: PropTypes.string,
  contentInnerClassName: PropTypes.string,
  lazyRender: PropTypes.bool,
  children: PropTypes.node,
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  triggerElementProps: PropTypes.shape({
    theme: PropTypes.shape({
      text: PropTypes.string,
    }),
    degree: PropTypes.shape({
      duration: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
    }),
  }),
};

export default Collapsible;
