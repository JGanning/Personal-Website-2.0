import React, { Component } from "react";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const getTreeItemsFromData = (treeItems) => {
  console.log(treeItems);
  return treeItems.map((treeItemData) => {
    let children = undefined;
    if (treeItemData.children && treeItemData.children.length > 0) {
      children = getTreeItemsFromData(treeItemData.children);
    }
    return (
      <TreeItem
        key={treeItemData.nodeId}
        nodeId={treeItemData.nodeId}
        label={treeItemData.label}
        children={children}
      />
    );
  });
};

const DataTreeView = ({ treeItems }) => {
  console.log(treeItems);
  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {getTreeItemsFromData(treeItems)}
    </TreeView>
  );
};

class Hierarchy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treeItems: [
        {
          nodeId: "1",
          label: "parent 1",
          children: [
            {
              nodeId: "2",
              label: "child 1",
            },
            {
              nodeId: "3",
              label: "child 2",
            },
            {
              nodeId: "4",
              label: "child 3",
            },
          ],
        },
        {
          nodeId: "5",
          label:"parent 2",
          children: [
            {
              nodeId: "6",
              label: "child 4",
            },
            {
              nodeId: "7",
              label: "child 5",
              children: [
                {
                  nodeId: "8",
                  label: "grandchild 1",
                },
                {
                  nodeId: "9",
                  label: "grandchild 2",
                },
              ]
            },
          ]
        }
      ],
    };
  }

  render() {
    return (
      <div>
        <DataTreeView treeItems={this.state.treeItems} />
      </div>
    );
  }
}

export default Hierarchy;
