function test(){
  //トップフォルダ(出品写真)ーのID
  var folder_top_id = "1tkojhpVDSuClKpSUhshb74yrb0UvZexh";  
  
  //トップフォルダ(出品写真)ーを取得
  var folder_top = DriveApp.getFolderById(folder_top_id);
  
  //子フォルダ(2020年1月)達を取得(イテレータ)
  var folders_child = folder_top.getFolders();

  //子フォルダ(2020年1月)ーがある場合、
while (folders_child.hasNext()){
    //子フォルダ(2020年1月)の一つを取得
    var folder_child = folders_child.next();
   
    Logger.log(folder_child.getName()); //202001
    var month = folder_child.getName();
    
    //最初の2文字を削除
    var month2 = month.slice( 2 ) ;
    
    //子子フォルダ(1日)達を取得
    var folders_child_child = folder_child.getFolders();
    
    //子子フォルダ(1日)がある場合、
while (folders_child_child.hasNext()) {
    　　//子子フォルダ(1日)の一つを取得
       var folder_child_child = folders_child_child.next();
       
       Logger.log(folder_child_child.getName()); //01
       var day = folder_child_child.getName();
       
       //子子子フォルダ(01)達を取得
       var folders_child_child_child = folder_child_child.getFolders();
       
       Logger.log(folders_child_child_child);
       
       //子子子フォルダ(01)がある場合、
while (folders_child_child_child.hasNext()) {
         //子子子フォルダ(01)の一つを取得
         var folder_child_child_child = folders_child_child_child.next();
         
         Logger.log(folder_child_child_child.getName()); //01
         var number = folder_child_child_child.getName();
         
         //ファイル(画像)達を取得
         var files = folder_child_child_child.getFiles();
         
         number2 = 0;
         
         //ファイル（画像)がある場合、
while (files.hasNext()) {
           number2 += 1;
           Logger.log(number2); //1.0
        
           //ファイル(画像)の一つを取得
           var file = files.next();
           
           Logger.log(file.getName()); //ファイルごとに違う
           var file_name = month2 + day + "-" + number + "-" + number2 + ".JPG";
           
           file.setName(file_name);
           Logger.log(file_name); //200101-01-1.JPG
         } 
       } 
    }
  }
}
