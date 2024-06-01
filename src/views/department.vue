<template>
  <div style="text-align: left;">
    <el-button-group >
      <el-button type="primary" @click="dialogVisible=true" icon="el-icon-plus">新增</el-button>
      <el-button type="primary" icon="el-icon-edit">编辑</el-button>
      <el-button type="danger" icon="el-icon-delete">删除</el-button>
    </el-button-group>


    <el-dialog
      title="新增/编辑"
      :visible.sync="dialogVisible"
      width="30%"
      >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="部门名称">
          <el-input v-model="form.depName"></el-input>
        </el-form-item>
        <el-form-item label="部门排序">
          <el-input type="number" v-model="form.depOrder"></el-input>
        </el-form-item>
        <el-form-item label="部门备注">
          <el-input type="textarea"
            :rows="2" 
            v-model="form.depRemark"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="savedata">确 定</el-button>
      </span>
    </el-dialog>


    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="编号"
        width="180">
        <template slot-scope="scope">
          <!-- <i class="el-icon-time"></i> -->
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="名称"
        width="180"
        prop="depName"
        >
       
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)" style="margin-right: 10px;">编辑</el-button>
            <el-popconfirm
              title="这是一段内容确定删除吗？"
              @confirm="handleDelete(scope.$index, scope.row)"
            >

          <el-button
            slot="reference"
            size="mini"
            type="danger"
           >删除</el-button>
         
        </el-popconfirm>
          </template>
      </el-table-column>
    </el-table>
  </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          tableData: [],
          dialogVisible:false,
          form:{}
        }
      },
    //   创建后就调用查询数据
      created(){
        this.getdata();
      },
      methods: {
        handleDelete(index,row){
          console.log("row:"+JSON.stringify(row))
          this.$http.get('/api/department/delete?id='+row.id)
                .then((response) =>{
                  if(response.data.code=='200')
                  {
                      this.getdata();
                  }
                  else{
                    this.$message.error(response.data.message);
                  }
                });
        },
        savedata(){
            this.$http.post('/api/department/save',this.form)
                .then((response) =>{
              
                  if(response.data.code=='200')
                  {
                      this.form={};
                      this.dialogVisible=false;
                      this.getdata();
                  }
                  else{
                    this.$message.error(response.data.message);
                  }

                  //  console.log(JSON.stringify(response.data));
                });
        },
        getdata(){
            this.$http.get('/api/department/select')
                .then((response) =>{
                  if(response.data.code=='200')
                  {
                      this.tableData=response.data.object;
                  }
                  else{
                    this.$message.error(response.data.message);
                  }

                  //  console.log(JSON.stringify(response.data));
                });
        },
        handleEdit(index, row) {
          console.log(index, row);
          this.form=row;
          this.dialogVisible=true;
        }
       
      }
    }
  </script>