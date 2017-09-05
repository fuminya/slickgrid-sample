(function() {
  'use strict';

  /**
   * SlickGrid用オブジェクト
   */
  var grid;
  var dataView;

  $(function() {
    // SlickGridのセットアップ
    setupGrid();

    // データを読み込む
    loadGrid();
  })

  function setupGrid() {

    // オプションの設定
    var options = {
      enableColumnReorder: false
    };

    // カラムの設定
    var columns = [
      {id:'col1', name:'HEAD1', field:'col1', width:100},
      {id:'col2', name:'HEAD2', field:'col1', width:100},
      {id:'col3', name:'HEAD3', field:'col1', width:100},
      {id:'col4', name:'HEAD4', field:'col1', width:100},
      {id:'col5', name:'HEAD5', field:'col1', width:100}
    ];

    dataView = new Slick.Data.DataView();
    grid = new Slick.Grid('#myGrid', dataView, columns, options);

    grid.init();

    // for Debug.
    window.grid = grid;
  };

  function loadGrid() {
    var data = [];

    for(var i = 0; i < 500; i++) {
      data[i] = {
        id: 'id_' + i,
        col1: 'column_' + i,
        col2: 'column_' + i,
        col3: 'column_' + i,
        col4: 'column_' + i,
        col5: 'column_' + i
      }
    }

    dataView.setItems(data);
    grid.invalidate();
  }
})();