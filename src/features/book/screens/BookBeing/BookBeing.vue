<template>
	<div class="wrap-box">
		<div class="box-left">
			<BoxHeader title="Ghi chú">
				<div class="box-note">
					<label for="" class="label-note">Dòng cảm xúc</label>
					<div class="box-text">
						<textarea
							name=""
							id=""
							cols="30"
							rows="7"
							placeholder="Nội dung"
							class="text-note"
						></textarea>
						<div class="max-text">1/100</div>
					</div>
				</div>
				<button class="btn btn-primary">Thêm</button>
			</BoxHeader>
		</div>
		<div class="box-right bg-white shadow radius-5">
			<section class="tab-header">
				<button class="btn-tab">Đang đọc</button>
				<button class="btn-tab">Chờ đọc</button>
			</section>

			<section class="tab-content">
				<section class="tab-item">
					<div class="tab-img">
						<img
							src="https://eccthai.com/wp-content/uploads/2021/10/mac-ke-thien-ha-song-nhu-nguoi-nhat.jpg"
							alt=""
						/>
					</div>
					<div class="tab-body">
						<h1 class="tab-title">Mặc kệ thiên hạ sống như người nhật</h1>
						<div class="tab-info">
							<b>Tác giả:</b>
							<p>Maritamagawa</p>
						</div>
						<div class="tab-info">
							<b>Trạng thái:</b>
							<p>Đang đọc</p>
						</div>
						<div class="tab-note">
							<b>Ghi chú:</b>
							<p class="content-note">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
								praesentium aliquam, laboriosam deserunt adipisci qui ex
								mollitia explicabo voluptas, architecto dolore eum! Tempora
								repudiandae ea minima iusto architecto a quis!
							</p>
						</div>
					</div>
				</section>
			</section>
		</div>
	</div>
</template>

<script>
import BoxHeader from "@/components/BoxHeader/BoxHeader.vue";
export default {
	components: { BoxHeader },
};
</script>

<style></style>
