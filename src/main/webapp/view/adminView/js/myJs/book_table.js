 var $table = $('#book_table');
     $button = $('#button');
     $(function () {
		$table.bootstrapTable({		
			
            striped: true,  //�����ʾ����  
            pagination: true, //������ҳ  
            pageSize: 1,  //ÿҳ��ʾ�ļ�¼��  
            pageNumber:1, //��ǰ�ڼ�ҳ  
            pageList: [5, 10, 15, 20, 25],  //��¼����ѡ�б�  
            search: false,  //�Ƿ����ò�ѯ  
            showColumns: true,  //��ʾ������ѡҪ��ʾ����  
            showRefresh: true,  //��ʾˢ�°�ť  
            sidePagination: "server", //��ʾ���������  
            //����Ϊundefined���Ի�ȡpageNumber��pageSize��searchText��sortName��sortOrder  
            //����Ϊlimit���Ի�ȡlimit, offset, search, sort, order  
            queryParamsType : "undefined",   
			columns: [{
				field: 'id',
				title: 'Item ID',				
			}, {
				field: 'name',
				title: 'Item Name'
			}, {
				field: 'price',
				title: 'Item Price'
			}],
			data: [{
				id: 1,
				name: 'Item 1',
				price: '$1'
			}, {
				id: 2,
				name: 'Item 2',
				price: '$2'
			}, {
				id: 2,
				name: 'Item 2',
				price: '$2'
			}, {
				id: 2,
				name: 'Item 2',
				price: '$2'
			}, {
				id: 2,
				name: 'Item 2',
				price: '$2'
			}]  
			});
    });

 